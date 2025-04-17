import React from 'react'
import data from '../data.json'
import { useParams } from 'react-router'
import moment from 'moment';
import { marked } from 'marked';

const SingleBlog = () => {

  const {slug} = useParams(); 

  const item = data.find( e => e.slug == slug.slice(1) )

  const paragraph = item.content.split('\n\n---\n\n')

  console.log(paragraph)

  return (
    <div className="pt-8 px-4 border-[1px] border-[#EFEDEB] w-full max-w-[640px]">

      <div className="my-8 pb-8 border-b-[1px] border-b-[#EFEDEB] flex flex-col gap-4">
        <h2 className=" font-extrabold text-[40px] text-[#34302D] leading-[130%]">{item.title}</h2>
        <span className="text-[#4A4846] text-[16px] italic">{moment(item.publishedAt).format('LL')}</span>
        <div id='markdown' dangerouslySetInnerHTML={{ __html: marked.parse(item.content) }}>

        </div>
  
      </div>




    </div>
  )
}

export default SingleBlog