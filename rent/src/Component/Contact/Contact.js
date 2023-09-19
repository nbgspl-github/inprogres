import React from "react"

import Back from "../Common/Back"
import "./Contact.css"

const Contact = () => {
  return (
    <>
      <section className='contact'>
        <Back name='Contact Us' title='Get Helps & Friendly Support'  />
        <div className='container'>
          <form className='shadow'>
            <h4>Fillup The Form</h4> <br />
            <div>
              <input type='text' placeholder='Title' />
              <input type='text' placeholder='Name' />
            </div>
            <div>
              <input type='text' placeholder='Email Address' />
              <input type='text' placeholder='Contact No' />
            </div>
            <input type='text' placeholder='Subject' />
            <textarea cols='20' rows='5'></textarea>
            <button>Submit Request</button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact