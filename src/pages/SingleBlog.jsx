import React from 'react'
import data from '../data.json'
import { useParams } from 'react-router'
import moment from 'moment';
import { marked } from 'marked';

const SingleBlog = ({theme}) => {

  const {slug} = useParams(); 

  const item = data.find( e => e.slug == slug.slice(1) );

  return (
    <div className={`${theme == 'light' ? "border-[#EFEDEB]" : "border-[#34302D]"} pt-8 px-4 border-[1px]  w-full max-w-[620px]`}>

      <div className={`${theme == 'light' ? "border-b-[#EFEDEB]" : "border-[#34302D]"} my-8 pb-8 border-b-[1px]  flex flex-col gap-4`}>
        <h2 className={`${theme == 'light' ? "text-[#34302D]" : "text-[#FEFEFE]"} font-extrabold text-[40px]  leading-[130%]`}>{item.title}</h2>
        <span className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"}  text-[16px] italic`}>{moment(item.publishedAt).format('LL')}</span>
        <div id='markdown' className={`${theme == 'light' ? "" : "dark"}`} dangerouslySetInnerHTML={{ __html: marked.parse(item.content) }}>

        </div>
  
      </div>




    </div>
  )
}

export default SingleBlog