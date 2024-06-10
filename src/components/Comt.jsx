"use client"

import { app } from "@/firebase";
import { doc, getFirestore, onSnapshot,
     collection, setDoc, serverTimestamp, deleteDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { HiDotsHorizontal, HiHeart, HiOutlineHeart } from "react-icons/hi"
import { signIn, useSession } from "next-auth/react";

export default function Comt({comment, commentId, orignalPostId}) {
    const [isLiked, setIsLiked] = useState(false);
    const [likes, setLikes] = useState([]);
    const db = getFirestore(app)

     const {data:session} = useSession()

     console.log(session?.user?.uid, "its id")

     const likePost = async () => {
        if(session){
            if(isLiked) {
                await deleteDoc(doc(db, "posts", orignalPostId, "comments", commentId, "likes",
                     session?.user?.uid))
            }else{
                await setDoc(doc(db, "posts",orignalPostId, "comments", commentId, "likes", session.user.uid), {
                    username: session.user.username,
                    timestamp: serverTimestamp(),
                });
            }
        }else{
            signIn();
        }
    }

    useEffect(()=> {
        onSnapshot(collection(db, "posts", orignalPostId, "comments", commentId, "likes"), (snapshot)=> {
            setLikes(snapshot.docs)
        }
    )
    },[db])

    useEffect(()=> {
        setIsLiked(likes.findIndex((like)=> like.id === session?.user?.uid) !== -1);
    },[likes])

    return (
        <div className='flex p-3 border-b border-gray-300 hover:bg-gray-50 pl-10 '>
        <img src={comment?.userImg} alt='user-img' className='h-9 w-9 rounded-full mr-4'/>
        <div className='flex-1'>
        <div className='flex items-center justify-between'>
        <div className='flex items-center space-x-1  whitespace-nowrap'>
          <h4 className='font-bold text-sm truncate'>{comment?.name}</h4>
          <psan className="text-xs truncate">@{comment?.username}</psan>
        </div>
        <HiDotsHorizontal className='text-sm'/>
        </div>
        <p className='text-gray-800 text-xs my-3'>{comment?.comment}</p>
        <div className="flex items-center ">
        {isLiked ? (
        <HiHeart onClick={likePost}
        className="h-8 w-8 cursor-pointer rounded-full text-red-600 transition duration-500 ease-in-out p-2
        hover:text-red-500 hover:bg-red-100"/>
        )
      :(
        <HiOutlineHeart onClick={likePost}
        className="h-8 w-8 cursor-pointer rounded-full transition duration-500 ease-in-out p-2
        hover:text-red-500 hover:bg-red-100"/>
        )}
       {likes.length > 0 && <span className={`text-xs ${isLiked && "text-red-600"}`}>{likes.length}</span>}
        </div>
        </div>
      </div>
  )
}
