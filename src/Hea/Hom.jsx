import React from 'react'
import './Hea.css'

const Hom = () => {
  return (
    <div> 
        <section className='hom'>
            <div className='container flexSB'>
                <div className="logo" data-aos="zoom-in"
                    data-aos-duration="3000">
                    <h1 >ACADEMIA</h1>
                    <span>ONLINE EDUCATION & LEARNING</span>
                </div>


                <div className='social'
                data-aos="zoom-out"
                data-aos-duration="3000">
                    <i className='fab fa-facebook-f icon'></i>
                    <i className='fab fa-instagram icon'></i>
                    <i className='fab fa-twitter icon'></i>
                    <i className='fab fa-youtube icon'></i>
                </div>

            </div>

        </section>
    </div>
  )
}

export default Hom

