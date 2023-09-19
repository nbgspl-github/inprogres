import React from "react"
import Heading from "../Common/Heading"
import { team } from "../Data/Data"
import "./Team.css"

const Team = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title='Global Roommates' subtitle=' Connect with people from around the world and find the perfect roommate for your shared living experience. 
          Explore diverse cultures, forge lasting friendships, and share the adventure of cohabitation. 
          Discover affordable housing solutions and create a home away from home.' />

          <div className='content mtop grid3'>
            {team.map((val, index) => (
              <div className='box' key={index}>
               
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='fa-solid fa-circle-check'></i>
                  </div>
                  <i className='fa fa-location-dot'></i>
                  <label>{val.address}</label>
                  <h4>{val.name}</h4>

                  <ul>
                    {val.icon.map((icon, index) => (
                      <li key={index}>{icon}</li>
                    ))}
                  </ul>
                  <div className='button flex'>
                    <button>
                      <i className='fa fa-envelope'></i>
                      Looking for a Room
                    </button>
                    <button className='btn4'>
                      <i className='fa fa-phone-alt'></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team