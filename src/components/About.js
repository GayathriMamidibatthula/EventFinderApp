
import img from "./images/celeb.jpg";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
const mystyle={
   //textAlign: "center",
  backgroundImage: `url(${img})`,
   //position: "fixed",
   minWidth: "100%",
   minHeight: "150%",
   backgroundSize: "cover",
   backgroundPosition: "center"
  
};

const About=()=>{
  // styling = mystyle();
  
  
    return(

       <div className="container" style={mystyle}>
      <div className="p-5 mb-4 rounded-3 text-center" >
      <div className="container-fluid py-5 "  >
        <h1 className="display-5 fw-bold" style={{color: "black"}} >Find My Events!</h1>
        <br/>
        <p style={{textAlign: 'center-justify', fontSize: '20px', color: "black" }}>Welcome to Find My Events, a joint collaboration of Find My Movies and a one-stop destination for all your favourite events!</p>
        
        <p style={{textAlign: 'center', fontSize: '20px', color: "black"}}>Click on the <NavLink to="/movie-list">Events </NavLink> page to get started!</p>
        <br/>
<img src="https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1532122687000/photosp/59dd86db-f098-431b-bcea-126adf9f2edf/stock-photo-colorful-celebration-time-bright-message-party-color-letters-balloons-59dd86db-f098-431b-bcea-126adf9f2edf.jpg"
height="300px"/>        
      </div>
    </div>
    </div> 
    

       

 
    )
  }

export default About;