import React from 'react'
import { assets } from '../assets/assets'

const About = ({theme}) => {



  return (
    <div className={`${theme == 'light' ? "border-[#EFEDEB]" : "border-[#34302D]"}  pt-16 px-4 border-[1px] w-full max-w-[620px]`}>

        <h2 className={`${theme == 'light' ? "text-[#34302D]" : "text-[#EFEDEB]"}  font-extrabold text-[32px]  border-b-8 border-[#93CEFC] leading-[50%] w-[160px] mb-6`}>About Me </h2>
        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px]  mb-8`}>Hi, I’m Paulina! Ever since I can remember, I’ve had a passion for creativity and problem-solving. That’s what led me to the world of front-end web development. There’s something magical about seeing an idea come to life in the browser—whether it’s a simple layout experiment or a complex interface for a bigger project.</p>
        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px]  mb-8`}>When I’m not coding, I love getting lost in a good book. My taste is pretty eclectic: I’ll happily read everything from fantasy novels to biographies of tech pioneers. Reading helps me unwind and often sparks new ideas for my coding projects.</p>
        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px]  mb-8`}>Another big passion of mine is the great outdoors. Hiking allows me to disconnect from the digital world and reconnect with nature. I love challenging hikes with rewarding views at the top. And if I’m not on the trails, you might catch me rock climbing. The combination of mental focus and physical endurance is a perfect parallel to tackling tough coding challenges!</p>
        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px]  mb-8`}>Some of my favorite books:</p>

        <ul class="list-disc ml-3">
          <li className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px] mb-2`}><span className='font-semibold'>“The Pragmatic Programmer”</span> by Andrew Hunt and David Thomas (for helpful insights into software development)</li>
          <li className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px] mb-2`}><span className='font-semibold'>“Ready Player One”</span> by Ernest Cline (for some futuristic escapism)</li>
          <li className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px] mb-2`}><span className='font-semibold'>“The Hobbit”</span> by J.R.R. Tolkien (for a bit of fantasy fun)</li>
          <li className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px] mb-2`}><span className='font-semibold'>“Educatedr”</span> by Tara Westover (for incredible inspiration)</li>
        </ul>

        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px] my-8`}>I absolutely love my workspace as a place that inspires me to do my best work, so I thought I’d share it with you:</p>

        <picture>
          <source 
            srcSet={assets.image_workspace_large}
            media='(min-width:768px)'
          />
          <img  className=' rounded-[12px]' src={assets.image_workspace_small}  />
        </picture>

        <p className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} text-[18px] my-8`}>I hope this blog not only documents my growth but also helps others see that coding can be for everyone. Thanks for joining me on this journey!</p>

        <h3 className={`${theme == 'light' ? "text-[#34302D]" : "text-[#EFEDEB]"}  text-2xl font-semibold mb-4`}>Follow me</h3>
        
    </div>
  )
}

export default About