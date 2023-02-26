import React from 'react'
import { BrowserRouter, Route, Routes  } from 'react-router-dom'
import './App.css'

import Abou from './Components/abo/Abou'
import CourseHome from './Components/AllCourse/CourseHome'
import Blog from './Components/blog/Blog'
import Contact from './Components/contact/Contact'
import Pricing from './Components/pricing/Pricing'
import Home from './Components/home/Home'
import Team from './Components/team/Team'

import Hea from './Hea/Hea'
import Footer from './Components/footer/Footer'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Hea/>
      <Routes>

        <Route path='/WebCourses' element={<Home/>}></Route>
        <Route path='/about' element={<Abou/>}/>
        <Route path='/courses' element={<CourseHome/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/pricing' element={<Pricing/>}/>
        <Route path='/Team' element={<Team/>}/>
        <Route path='/journal' element={<Blog/>}/>
      </Routes>
      <Footer/>

      
      
      </BrowserRouter>
      
      
      

    </div>
  )
}

export default App
