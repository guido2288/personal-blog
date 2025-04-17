import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Newsletter from "./pages/Newsletter"
import Footer from "./components/Footer"
import SingleBlog from "./pages/SingleBlog"


function App() {

  return (
    <main className="bg-[#FBF9F7] p-4 md:py-5 flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/blog" element={<Blog />}/>  
        <Route path="/blog/:slug" element={<SingleBlog />}/>  
        <Route path="/about" element={<About />}/>  
        <Route path="/newsletter" element={<Newsletter />}/>  
      </Routes> 
      <Footer />
    </main>
  )
}

export default App
