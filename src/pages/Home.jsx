import moment from "moment";
import { assets } from "../assets/assets"
import data from '../data.json'
import { Link } from "react-router";

const Home = ({theme}) => {

  const items = data.slice(0,5);

  return (
    <div className={`${theme == 'light' ? "border-[#EFEDEB] " : "border-[#34302D]"} pt-8 px-4 border-[1px] w-full max-w-[620px]`}>
      <div className={`my-8 border-b-[1px] ${theme == 'light' ? "border-b-[#EFEDEB]" : "border-[#34302D]"} `}>
        <h2 className={`font-extrabold text-[32px] ${theme == 'light' ? "text-[#34302D] " : "text-[#FEFEFE]"} border-b-8 border-[#93CEFC] leading-[50%] w-[260px] mb-6`}>Hi, I’m Paulina 👋</h2>
        <p className={`mt-6 text-lg ${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} `}>I’m on a journey to become a front-end web developer. I love building little projects, trying out new coding techniques, and sharing what I learn along the way. When I’m not at my desk, you’ll find me reading, hiking through the mountains, or challenging myself on rock-climbing walls.</p>
        <p className={`mt-6 text-lg ${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"} `}>I started this blog to document my progress, keep myself accountable, and hopefully inspire anyone else who’s learning to code. Welcome to my corner of the internet, and thanks for stopping by!</p>

        <div className="mt-6 flex gap-3 mb-12">
          <div className={`border-[1px] rounded-[10px] ${theme == 'light' ? "bg-white border-[#EFEDEB] " : "border-[#34302D]"} hover:bg-[#EFEDEB]  drop-shadow-md  w-10 h-10 flex flex-col justify-center p-2 cursor-pointer  focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`} ><img src={assets.logo_x} alt="logo-x" /></div>
          <div className={`border-[1px] rounded-[10px] ${theme == 'light' ? "bg-white border-[#EFEDEB] " : "border-[#34302D]"} hover:bg-[#EFEDEB]  drop-shadow-md  w-10 h-10 flex flex-col justify-center p-2 cursor-pointer  focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}><img src={assets.logo_github} alt="logo-github" /></div>
          <div className={`border-[1px] rounded-[10px] ${theme == 'light' ? "bg-white border-[#EFEDEB] " : "border-[#34302D]"} hover:bg-[#EFEDEB]  drop-shadow-md  w-10 h-10 flex flex-col justify-center p-2 cursor-pointer  focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}><img src={assets.logo_linkedin} alt="logo-linkedin" /></div>
          <div className={`border-[1px] rounded-[10px] ${theme == 'light' ? "bg-white border-[#EFEDEB] " : "border-[#34302D]"} hover:bg-[#EFEDEB]  drop-shadow-md  w-10 h-10 flex flex-col justify-center p-2 cursor-pointer  focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}><img src={assets.logo_frontend_mentor} alt="logo-frontend-mentor" /></div>
          
          
          
        </div>
      </div>

      <div className="my-8">

        <h2 className={`font-extrabold text-[32px] ${theme == 'light' ? 'text-[#34302D]' : 'text-[#FEFEFE]'} `}>Latest Articles</h2>

        <div className="my-8">

          {
            items.map( (e , idx) => (
              <div key={idx} className="mb-6">
                <h3 className={`text-[20px] ${theme == 'light' ? 'text-[#34302D] hover:text-[#4A4846]' : 'text-[#FEFEFE] hover:text-[#fefefe8c]'} font-semibold  leading-[130%] cursor-pointer  hover:underline`}>
                  <Link to={`/blog/:${e.slug}`} className="focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2">
                    {e.title}
                  </Link>
                </h3>
                <span className={`${theme == 'light' ? "text-[#4A4846]" : "text-[#C0BFBF]"}  text-[16px] italic`}>{moment(e.publishedAt).format('LL')}</span>
              </div>
            ) )
          }

        </div>

          
        <p className={`${theme == 'light' ? "text-[#34302D] hover:text-[#4A4846]" : "text-[#FEFEFE] hover:text-[#fefefe8c]"} text-lg font-medium  border-b-4 border-[#93CEFC] w-[140px]   cursor-pointer` }>
          <Link to="/blog" viewTransition className="focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2">
            View all articles
          </Link>
        </p>

      </div>

    </div>
  )
}

export default Home