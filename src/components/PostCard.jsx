import React, { useState } from 'react'
import { data } from '../data.js'
function PostCard({i}) {
    // console.log(data[i])
    const [dataa] = useState(data[i])
  return (
    <div className='flex flex-col items-center justify-center h-auto w-full gap-2 bg-amber-300'>
        <h1 className='font-semibold text-center'>Title: {dataa.title}</h1>
        <p className=' text-gray-500 text-center'>Description: {dataa.body}</p>
        <p>Tags:</p>
        {
            dataa.tags.map((tag,i) => (   
                <ul className='flex' key={i}>
                <li className='text-center list-disc'>{tag}</li>
                </ul>
            ))
        }
        <a href='#'>Authors: {dataa.author.name}</a>        
    </div>
  )
}

export default PostCard
