import React from "react"
import { footer } from "../Data/Data"
import "./Footer.css"

const Footeer2 = () => {
  return (
    <>
      <section className='footer2t'>
        
      </section>

      <footer>
        <div className='container'>
          
          {footer.map((val) => (
            <div className='box'>
              <h3>{val.titles}</h3>
              <ul>
                {val.text.map((items) => (
                  <li> {items.list} </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className='legal'>
        <span></span>
      </div>
    </>
  )
}

export default Footeer2;