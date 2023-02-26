import React from "react"
import Allheadings from "../../AllData/Allheadings"
import PriceCard from "../pricing/PriceCard"

const Hprice = () => {
  return (
    <>
      <section className='hprice padding'>
        <Allheadings subtitle='OUR PRICING' title='Pricing & Packages' 
         />
        <div className='price container grid'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Hprice
