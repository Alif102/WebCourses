import React from "react"


import "./team.css"

import '../abo/About.css'
import Back from "../about/Back"
import TeamCard from "./TeamCard"
import Awrapper from "../abo/Awrapper"

const Team = () => {
  return (
    <>
      <Back title='Team' />
      <section className='team padding'>
        <div className='container grid'>
          <TeamCard />
        </div>
      </section>
      <Awrapper />
    </>
  )
}

export default Team
