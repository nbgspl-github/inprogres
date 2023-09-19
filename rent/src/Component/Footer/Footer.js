import React from "react"
import { footer } from "../Data/Data"
import "./Footer.css"


const Footer = () => {
  return (
    <>
   
     <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section>
      

      <footer>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <img src='./logo1.png' alt='' />
              <h2>Do You Need Help With Anything?</h2>
              <p>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

              <div className='input flex'>
                <input type='text' placeholder='Email Address' />
                <button>Subscribe</button>
              </div>
            </div>
          </div>

          {footer.map((val) => (
             
            <div className='box'
            >
            
              <h3>{val.title}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
     
     
      
      <div className='legal'>
      <a href="Home" alt="" style={{color:"grey",padding:"15px"}}>Home </a>
    <a href="Menu" alt="" style={{color:"grey" ,padding:"15px"}}>Menu</a>
    <a href="About Us" alt="" style={{color:"grey" ,padding:"15px"}}>About</a>
    <a href="Contact Us" alt="" style={{color:"grey" ,padding:"15px"}}>Contact Us</a>
    <a href="Preview" alt="" style={{color:"grey",padding:"15px"}}>Preview</a>
    <a href="Terms&Condition" alt="" style={{color:"grey",padding:"15px"}}>Terms & Conditions </a>
    <a href="PrivacyPolicy" alt="" style={{color:"grey",padding:"15px"}}>Privacy Policy</a>
    <a href="Home" alt="" style={{color:"grey",padding:"15px"}}>Refund & Cancellation Policy</a>
    <div>
    <span className="" style={{color:"grey",marginTop:"10px"}}>
    Copyright © GlobalRoommates. All rights reserved.
    </span>
    </div>
    </div>
    
    
      </footer>
    </>
  )
}

export default Footer