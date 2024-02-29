import { BrowserRouter, Route, Routes } from 'react-router-dom'


import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Singup } from './pages/Signup'
import { Landing } from './pages/Landing'
import { Blogs } from './pages/Blogs'
import { Write } from './pages/Write'

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/'element= {<Landing/>}/>
          <Route path="/signup" element={<Singup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<Blog />} />
          <Route path='/postStories' element = { <Write/>}/>
        </Routes>
      </BrowserRouter>
   
    </>
  )
}

export default App