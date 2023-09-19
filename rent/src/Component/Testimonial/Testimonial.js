import React from 'react';
import './Testimonial.css'; 

const Testimonial = ({ author, text }) => {
  return (
    <div className="testimonial"> 
 <div className="heading">
      <h1>What Our Client Says About Us</h1>
      <img className='imag' src="./agen1.jpg" alt='product-image' style={{height:"150px" , width:"180px"}}/>
     
      </div>
      <div className='heading'>
    
    <p>lorem Ipsum is simply dummy text of the printing and typesetting industry.
         Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
         when an unknown printer
         took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
    </div>
  );
};

export default Testimonial;
