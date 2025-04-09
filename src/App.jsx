import { Route, Routes } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Blog from "./pages/Blog"
import About from "./pages/About"
import Newsletter from "./pages/Newsletter"


function App() {

  return (
    <main className="bg-[#FBF9F7] p-4 md:py-5 flex flex-col items-center">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>  
        <Route path="/blog" element={<Blog />}/>  
        <Route path="/about" element={<About />}/>  
        <Route path="/newsletter" element={<Newsletter />}/>  
      </Routes> 
    </main>
  )
}

export default App
