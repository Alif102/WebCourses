import React from "react"
import ab from '../abo/back.webp'
import "./About.css"



import { homeAbout} from "../../Data"
import Allheadings from "../../AllData/Allheadings"


const AboutCard = () => {
  return (
    <>
      <section className='aboutHome'>
        <div className='container flexSB'>
          <div className='left row'>
            <img src={ab} alt='' />
          </div>
          <div className='right row'>
            <Allheadings subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise' />
            <div className='items'>
              {homeAbout.map((val) => {
                return (
                  <div className='item flexSB'>
                    <div className='img'>
                      <img src={val.cover} alt='' />
                    </div>
                    <div className='text'>
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
      
    </> 
  )
}

export default AboutCard