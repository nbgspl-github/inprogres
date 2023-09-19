
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./Multi.css"
export default function Multi(){
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };
    return(
      <>
        <div className='heading'>
            <h1>Global Roommates</h1>
            <p> Here are the global roommates .</p>
            </div>
            <Carousel responsive={responsive}>
                
  <div className='img.box'>
    <img className='details' src="./agen1.jpg" alt='product-image' style={{height:"150px" , width:"180px", marginTop:"20px"}}/>
    <h4>Ankita Singh</h4>
    <button style={{height:"2px"}}></button>
    <p>Looking for a room</p>

  </div>
 
  <div className='' style={{margin:"0px -170px" ,marginTop:"20px"}}>
    <img className='details' src="./agen2.jpg" alt='product-image' style={{height:"150px" , width:"180px"}}/>
    <h4>Ankita Singh</h4>
    <button style={{height:"2px"}}></button>
    <p>Looking for a room</p>

  </div>
  <div className='' style={{margin:"0px -330px", marginTop:"20px"}}>
  <img className='details' src="./agen3.jpg" alt='product-image' style={{height:"150px" , width:"180px"}}/>
    <h4>Ankita Singh</h4>
    <button style={{height:"2px"}}></button>
    <p>Looking for a room</p>
  </div>
  <div className='' style={{margin:"0px -500px",marginTop:"20px"}}>
  <img className='details' src="./agen4.jpg" alt='product-image' style={{height:"150px" , width:"180px"}}/>
    <h4>Ankita Singh</h4>
    <button style={{height:"2px"}}></button>
    <p>Looking for a room</p>
  </div>
  <div className='' style={{margin:"0px -650px",marginTop:"20px"}}>
  <img className='details' src="./agen5.jpg" alt='product-image' style={{height:"150px" , width:"180px" }}/>
    <h4>Ankita Singh</h4>
    <button style={{height:"2px"}}></button>
    <p>Looking for a room</p>
  </div>
  <div className='' style={{margin:"0px -830px",marginTop:"20px"}}>
  <img className='details' src="./agen6.jpg" alt='product-image' style={{height:"150px" , width:"180px"}}/>
    <h4>Ankita Singh</h4>
    <button style={{height:"2px"}} ></button>
    <p>Looking for a room</p>
  </div>
</Carousel>;
</>

        
    )
};
