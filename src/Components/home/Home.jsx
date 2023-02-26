import React from "react"

import HAbout from "./HAbout"
import Hero from "./hero/Hero"
import Hprice from "./Hprice"
import Testimonal from "./testimonal/Testimonal"
import AboutCard from "../abo/AboutCard"
import '../../Components/home/hero/Hero.css'
import Hblog from "./Hblog"

const Home = () => {
  return (
    <><div className="main-home">
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog/>
      <Hprice />

    </div>
      
    </>
  )
}

export default Home
