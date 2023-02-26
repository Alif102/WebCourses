import React from "react"
import "./Courses.css"


import Allheadings from "../../AllData/Allheadings"
import { online } from "../../Data"

const OnlineCourses = () => {
  return (
    <>
      <section className='online'>
        <div className='container'>
          <Allheadings subtitle='COURSES' title='Browse Our Online Courses' />
          <div className='content grid3'>
            {online.map((val) => (
              <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show' />
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default OnlineCourses