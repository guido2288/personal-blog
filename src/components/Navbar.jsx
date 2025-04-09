import { useState } from "react"
import { assets } from "../assets/assets"
import { Link } from "react-router";

const Navbar = () => {

  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="bg-white p-1.5 rounded-[10px] flex justify-between items-center w-full max-w-[640px] border-[1px] border-[#EFEDEB] relative drop-shadow-xs">
        <img src={assets.image_avatar} alt="avatar" className=" rounded-2xl w-10 h-10"/>
        <div className="flex gap-2.5 ">
            <div 
                className={`${menuActive && "bg-[#34302D]" } md:hidden cursor-pointer w-10 h-10 flex flex-col justify-center items-center rounded-[10px]`}
                onClick={ () => setMenuActive(!menuActive)}
                >
                {
                    !menuActive ? <img src={assets.icon_menu} alt="menu-icon"/> : <img src={assets.icon_menu_close} alt="menu-icon"/>
                }
                
            </div>
            <div className="hidden md:flex md:gap-4">
                <ul className="flex items-center gap-6 mr-6">
                    <li><Link to="/" className="font-medium text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC]">Home</Link></li>
                    <li><Link to="/blog" className="font-medium text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC]">Blog</Link></li>
                    <li><Link to="/about" className="font-medium text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC]">About</Link></li>
                    <li><Link to="/newsletter" className="font-medium text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC]">Newsletter</Link></li>
                </ul>
            </div>

            {
                menuActive && 
                <div className="absolute bg-white border-[1px] border-[#EFEDEB] rounded-[10px] w-full left-0 max-w-[640px] top-[80px] p-3 md:hidden drop-shadow-xs">
                <ul className="flex flex-col justify-center items-center gap-6">
                    <li><Link to="/" className="font-medium text-lg text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC] border-b-1 border-b-[#EFEDEB]">Home</Link></li>
                    <li><Link to="/blog" className="font-medium text-lg text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC] border-b-1 border-b-[#EFEDEB]">Blog</Link></li>
                    <li><Link to="/about" className="font-medium text-lg text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC] border-b-1 border-b-[#EFEDEB]">About</Link></li>
                    <li><Link to="/newsletter" className="font-medium text-lg text-[#4A4846] hover:text-[#34302D] hover:border-b-4 border-[#93CEFC] ">Newsletter</Link></li>
                </ul>
            </div>
            }




            <div className="bg-[#FBF9F7] w-10 h-10 flex flex-col justify-center items-center rounded-[8px] cursor-pointer border-[1px] border-[#EFEDEB]">
                <img src={assets.icon_moon} alt="theme-icon" className=" w-5 h-5" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar