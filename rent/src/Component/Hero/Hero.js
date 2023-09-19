import React from "react"
import Heading from "../Common/Heading"

import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
       <h1>
     
        <span>BEST ROOOM  </span>
     RENTING PLATFORM
       </h1>
       <h3>FIND ROOM FASTER</h3>

          <form className='flex' style={{width:"560px",height:"70px"}}>
          <div className='box' style={{width:"1000px", paddingLeft: "10%"}}>
              <span>Location</span>
              <input type='text' placeholder='Enter City Name' />
            </div>
            
            <div className='box'>
              <h4></h4>
            </div>
            <button className='btn1'>
              <i className='fa fa-search'>Find</i>
            </button>
          </form>
        </div>
        <div className="box2">
        <button className='btn6' style={{marginLeft:"500px" }}>
              <i className='fa fa-search'>
                OWNER
              </i>
            </button>
            
            <button className='btn6'>
              <i className='fa fa-search'>
                TENANT
              </i>
            </button>
            


        </div>
            
          
      </section>
    </>
  )
}

export default Hero