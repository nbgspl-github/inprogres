import React from "react"
import Heading from "../Common/Heading"
import "./Recent.css"
import RecentCard from "./RecentCard"

const Recent = () => {
  return (
    <>
      <section className='recent padding'>
        <div className='container'>
         
          <RecentCard />
        </div>
      </section>
    </>
  )
}

export default Recent