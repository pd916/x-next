import Link from 'next/link'
import React from 'react'
import { HiDotsHorizontal } from 'react-icons/hi'

function Post({post, id}) {
  return (
    <div className='flex p-3 border-b border-gray-300'>
      <img src={post?.profileImg} alt='user-img' className='h-11 w-11 rounded-full mr-4'/>
      <div className='flex-1'>
      <div className='flex items-center justify-between'>
      <div className='flex items-center space-x-1  whitespace-nowrap'>
        <h4 className='font-bold text-xs truncate'>{post?.name}</h4>
        <psan className="text-xs truncate">@{post?.username}</psan>
      </div>
      <HiDotsHorizontal className='text-sm'/>
      </div>
      <Link href={`/post/${id}`}>
      <p className='text-gray-800 text-sm my-3'>{post?.text}</p>
      </Link>
      <Link href={`/post/${id}`}>
      <img src={post?.image} className='rounded-2xl mr-2'/>
      </Link>
      </div>
    </div>
  )
}

export default Post
