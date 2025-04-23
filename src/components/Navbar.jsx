import { useState } from "react"
import { assets } from "../assets/assets"
import { Link,  } from "react-router";

const Navbar = ({handleChangeTheme , theme}) => {

  const [menuActive, setMenuActive] = useState(false);

  const [menu, setMenu] = useState("");

  return (
    <nav className={` ${theme == 'light' ?  "bg-white border-[#EFEDEB]" : "bg-[#201E1D] border-[#34302D]"} p-1.5 rounded-[10px] flex justify-between items-center w-full max-w-[640px] border-[1px]  relative drop-shadow-xs`}>
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
                    <li>
                        <Link 
                        to="/" 
                        className={`font-medium   ${theme == 'light' ? "text-[#4A4846] hover:text-[#34302D]" : "text-[#C0BFBF] hover:text-[#FEFEFE]"} ${menu === "" && "border-b-4"}  hover:border-b-4 border-[#93CEFC] focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}
                        onClick={ () => setMenu('') }
                        >Home</Link>
                    </li>
                    <li>
                        <Link to="/blog" 
                        className={`font-medium   ${theme == 'light' ? "text-[#4A4846] hover:text-[#34302D]" : "text-[#C0BFBF] hover:text-[#FEFEFE]"} ${menu === "blog" && "border-b-4"}  hover:border-b-4 border-[#93CEFC] focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}
                        onClick={ () => setMenu('blog') }
                        >Blog</Link>
                    </li>
                    <li>
                        <Link to="/about" 
                        className={`font-medium   ${theme == 'light' ? "text-[#4A4846] hover:text-[#34302D]" : "text-[#C0BFBF] hover:text-[#FEFEFE]"} ${menu === "about" && "border-b-4"}  hover:border-b-4 border-[#93CEFC] focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}
                        onClick={ () => setMenu('about') }
                        >About</Link>
                    </li>
                    <li>
                        <Link to="/newsletter" 
                        className={`font-medium   ${theme == 'light' ? "text-[#4A4846] hover:text-[#34302D]" : "text-[#C0BFBF] hover:text-[#FEFEFE]"} ${menu === "newsletter" && "border-b-4"}  hover:border-b-4 border-[#93CEFC] focus:rounded-[4px] outline-[#5792C0] outline-offset-2 focus:outline-2`}
                        onClick={ () => setMenu('newsletter') }
                        >Newsletter</Link>
                    </li>
                </ul>
            </div>

            {
                menuActive && 
                <div className={`${ theme == 'light' ? "bg-white border-[#EFEDEB]"  : "bg-[#201E1D] border-[#34302D]"} absolute  border-[1px]  rounded-[10px] w-full left-0 max-w-[640px] top-[80px] p-3 md:hidden drop-shadow-xs`}>
                <ul className="flex flex-col justify-center items-center gap-6">
                    <li><Link to="/" className={`${ theme == 'light' ? "text-[#4A4846] hover:text-[#34302D] border-[#93CEFC] border-b-1 border-b-[#EFEDEB]"  : "text-[#C0BFBF]"} font-medium text-lg  hover:border-b-4 `}>Home</Link></li>
                    <li><Link to="/blog" className={`${ theme == 'light' ? "text-[#4A4846] hover:text-[#34302D] border-[#93CEFC] border-b-1 border-b-[#EFEDEB]"  : "text-[#C0BFBF]"} font-medium text-lg  hover:border-b-4 `}>Blog</Link></li>
                    <li><Link to="/about" className={`${ theme == 'light' ? "text-[#4A4846] hover:text-[#34302D] border-[#93CEFC] border-b-1 border-b-[#EFEDEB]"  : "text-[#C0BFBF]"} font-medium text-lg  hover:border-b-4 `}>About</Link></li>
                    <li><Link to="/newsletter" className={`${ theme == 'light' ? "text-[#4A4846] hover:text-[#34302D] border-[#93CEFC] border-b-1 border-b-[#EFEDEB]"  : "text-[#C0BFBF]"} font-medium text-lg  hover:border-b-4 `}>Newsletter</Link></li>
                </ul>
            </div>
            }




            <div 
                className={`${ theme == 'light' ? "bg-[#FBF9F7] border-[#EFEDEB]"  : "border-[#34302D]"} w-10 h-10 flex flex-col justify-center items-center rounded-[8px] cursor-pointer border-[1px] `}
                onClick={handleChangeTheme}
                >
                <img src={theme === 'light' ? assets.icon_moon : assets.icon_sun} alt="theme-icon" className=" w-5 h-5" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar