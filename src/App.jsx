import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Newsletter from "./pages/Newsletter"
import Footer from "./components/Footer"
import SingleBlog from "./pages/SingleBlog"
import { ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import { assets } from "./assets/assets"


function App() {

  const [theme, setTheme] = useState('light')

  useEffect(() => {
    if( theme === "dark" ){
      document.querySelector('html').classList.add('dark')
    }else{
      document.querySelector('html').classList.remove('dark')
    }
  }, [theme])

  const handleChangeTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <main className={` ${theme == 'light' ? "bg-[#FBF9F7]" : "bg-[#1C1A19]" } p-4 md:py-5 flex flex-col items-center bg-[${assets.pattern_light}] bg-center`}>
      <Navbar handleChangeTheme={handleChangeTheme} theme={theme}/>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home theme={theme}/>}/>  
        <Route path="/blog" element={<Blog theme={theme}/>}/>  
        <Route path="/blog/:slug" element={<SingleBlog theme={theme}/>}/>  
        <Route path="/about" element={<About theme={theme}/>}/>  
        <Route path="/newsletter" element={<Newsletter theme={theme}/>}/>  
      </Routes> 
      <Footer theme={theme}/>
    </main>
  )
}

export default App
