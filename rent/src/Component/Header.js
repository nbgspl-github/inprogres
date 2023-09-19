import React from 'react';
import './Header.css';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <h1 style={{color: "#27ae60" ,marginTop:"-1px",color:"#023ba3"}}>Global .</h1>
        <h6 style={{marginTop:"-10px",marginLeft:"13px"}}>Roommates</h6>
       <img src="" alt="" style={{height:"50px"}}/>
      </div>
      <nav className="nav">
      </nav>
      <div className="auth">
      <button className='btn1' style={{marginLeft:"120px",marginTop:"12px"}}>
              <i className='fa fa-sign-out'></i> Sign In/Register
            </button>
     
 
      </div>
    </header>
  );
}
export default Header;