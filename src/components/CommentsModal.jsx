"use client"

import { app } from "@/firebase"
import { collection, getFirestore, onSnapshot, orderBy, query } from "firebase/firestore"
import { useEffect, useState } from "react";
import Comt from "./Comt";
 export default function CommentsModal({id}) {
    const db = getFirestore(app);
    const [comments, setComments] = useState([])
  
    useEffect(()=> {
      onSnapshot(query(collection(db, "posts", id, "comments"), orderBy ("timestamp", "desc")), (snapshot) => {
          setComments(snapshot.docs) 
      });
    },[db, id])
   return (
     <div>
     {
        comments.map((comment)=> (
            <Comt key={comment.id} comment={comment.data()} id={comment.id}/>
        ))
     }
     </div>
   )
 }
 