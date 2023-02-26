import React from 'react'
import Back from '../about/Back'
import AboutCard from './AboutCard'
import './About.css'
import Awrapper from './Awrapper'

const Abou = () => {
  return (
    <div>
              
              <Back  title='About Us' style={{color:"red"}}/>
              <AboutCard/>
              <Awrapper/>

    </div>
  )
}

export default Abou