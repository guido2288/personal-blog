import { assets } from "../assets/assets"

const Home = () => {
  return (
    <div className="pt-8 px-4 border-[1px] border-[#EFEDEB] w-full max-w-[640px]">
      <div className="my-8 border-b-[1px] border-b-[#EFEDEB]">
        <h2 className=" font-extrabold text-[32px] text-[#34302D] underline underline-offset-2">Hi, I’m Paulina 👋</h2>
        <p className="mt-6 text-lg text-[#4A4846]">I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
        <p className="mt-6 text-lg text-[#4A4846]">I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!</p>

        <div className="mt-6 flex gap-3 mb-12">
          <div className=" border-[1px] rounded-[10px] bg-white drop-shadow-md border-[#EFEDEB] w-10 h-10 flex flex-col justify-center p-2 cursor-pointer hover:bg-[#EFEDEB]"><img src={assets.logo_x} alt="logo-x" /></div>
          <div className=" border-[1px] rounded-[10px] bg-white drop-shadow-md border-[#EFEDEB] w-10 h-10 flex flex-col justify-center p-2 cursor-pointer hover:bg-[#EFEDEB]"><img src={assets.logo_github} alt="logo-github" /></div>
          <div className=" border-[1px] rounded-[10px] bg-white drop-shadow-md border-[#EFEDEB] w-10 h-10 flex flex-col justify-center p-2 cursor-pointer hover:bg-[#EFEDEB]"><img src={assets.logo_linkedin} alt="logo-linkedin" /></div>
          <div className=" border-[1px] rounded-[10px] bg-white drop-shadow-md border-[#EFEDEB] w-10 h-10 flex flex-col justify-center p-2 cursor-pointer hover:bg-[#EFEDEB]"><img src={assets.logo_frontend_mentor} alt="logo-frontend-mentor" /></div>
          
          
          
        </div>
      </div>

      <div className="my-8">

        <h2 className=" font-extrabold text-[32px] text-[#34302D]">Latest Articles</h2>

        <div className="my-8">

          <div className="mb-6">
            <h3 className=" text-[20px] font-semibold text-[#34302D] leading-[130%] cursor-pointer hover:text-[#4A4846] hover:underline">Balancing Hobbies and Coding: How Hiking and Rock Climbing Help Me Stay Motivated</h3>
            <span className="text-[#4A4846] text-[16px] italic">February 18, 2025</span>
          </div>

          <div className="mb-6">
            <h3 className=" text-[20px] font-semibold text-[#34302D] leading-[130%] cursor-pointer hover:text-[#4A4846] hover:underline">Reading for Inspiration: 5 Books That Shaped My Coding Journey</h3>
            <span className="text-[#4A4846] text-[16px] italic">February 15, 2025</span>
          </div>

          <div className="mb-6">
            <h3 className=" text-[20px] font-semibold text-[#34302D] leading-[130%] cursor-pointer hover:text-[#4A4846] hover:underline">Overcoming Imposter Syndrome as a New Developer</h3>
            <span className="text-[#4A4846] text-[16px] italic">February 10, 2025</span>
          </div>

          <div className="mb-6">
            <h3 className=" text-[20px] font-semibold text-[#34302D] leading-[130%] cursor-pointer hover:text-[#4A4846] hover:underline">Exploring the World of Responsive Design</h3>
            <span className="text-[#4A4846] text-[16px] italic">February 4, 2025</span>
          </div>

          <div className="mb-6">
            <h3 className=" text-[20px] font-semibold text-[#34302D] leading-[130%] cursor-pointer hover:text-[#4A4846] hover:underline">My Favorite Dev Tools for Productivity</h3>
            <span className="text-[#4A4846] text-[16px] italic">January 29, 2025</span>
          </div>

        </div>

        <p className=" text-lg font-medium text-[#34302D] border-b-4 border-[#93CEFC] w-[140px] hover:text-[#4A4846]  cursor-pointer">View all articles</p>

      </div>

    </div>
  )
}

export default Home