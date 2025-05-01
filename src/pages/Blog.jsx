import React from 'react'
import data from '../data.json'
import moment from 'moment'
import { Link } from 'react-router'


const Blog = ({theme}) => {

  return (
    <div className={`${theme == 'light' ? "border-[#EFEDEB]" : "border-[#34302D]"} pt-4 px-4 border-[1px]  w-full max-w-[620px]`}>
      <div className={`${theme == 'light' ? "border-b-[#EFEDEB]" : "border-[#34302D]"} my-8 pb-8 border-b-[1px] `}>
        <h2 className={`${theme == 'light' ? "text-[#34302D]" : "text-[#FEFEFE]"} font-extrabold text-[32px] `}>My Articles</h2>
        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} mt-6 text-lg `}>Below are all my recent blog posts. Click on any title to read the full article.</p>
      </div>

      <div className="my-8">
        {
          data.map( (item, idx) => (
            <div className={`${theme == 'light' ? "border-b-[#EFEDEB]" : "border-[#34302D]"} mb-6 border-b-[1px] `}>
              <h3>
                <Link 
                to={`/blog/:${item.slug}`} 
                className={` ${theme == 'light' ? "text-[#34302D] hover:text-[#4A4846]" : "text-[#FEFEFE] hover:text-[#fefefe8c]"} text-[20px] mb-2 font-semibold   leading-[130%] cursor-pointer  hover:underline focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}>
                  {item.title}
                </Link>
                
              </h3>
              <span className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"}  text-[16px] italic`}>{moment(item.publishedAt).format('LL')}</span>
              <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-lg  mt-2 mb-4`}>{item.description}</p>
            </div>
          ) )
        }
      
      </div>




    </div>
  )
}

export default Blog