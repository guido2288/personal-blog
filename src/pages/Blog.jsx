import React from 'react'
import data from '../data.json'


const Blog = () => {

  return (
    <div className="pt-8 px-4 border-[1px] border-[#EFEDEB] w-full max-w-[640px]">
      <div className="my-8 pb-8 border-b-[1px] border-b-[#EFEDEB]">
        <h2 className=" font-extrabold text-[32px] text-[#34302D] ">My Articles</h2>
        <p className="mt-6 text-lg text-[#4A4846]">Below are all my recent blog posts. Click on any title to read the full article.</p>
      </div>

      <div className="my-8">
        {
          data.map( (item, idx) => (
            <div className="mb-6 border-b-[1px] border-b-[#EFEDEB]">
              <h3 className=" text-[20px] mb-2 font-semibold text-[#34302D] leading-[130%] cursor-pointer hover:text-[#4A4846] hover:underline">{item.title}</h3>
              <span className="text-[#4A4846] text-[16px] italic">{item.publishedAt}</span>
              <p className=" text-lg text-[#4A4846]">{item.description}</p>
            </div>
          ) )
        }
      
      </div>




    </div>
  )
}

export default Blog