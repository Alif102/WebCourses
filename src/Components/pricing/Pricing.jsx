import React from "react"

import "./price.css"
import Faq from "./Faq"
import PriceCard from "./PriceCard"
import Back from "../about/Back"


const Pricing = () => {
  return (
    <>
      <Back title='Choose The Right Plan' />
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard />
        </div>
      </section>
      <Faq />
    </>
  )
}

export default Pricing
