import React, { Component, useState } from "react";
import axios from "axios";
import img from "./images/celeb.jpg";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";


import 'bootstrap/dist/css/bootstrap.min.css';


const mystyle={
    //textAlign: "center",
   backgroundImage: `url(${img})`,
    //position: "fixed",
    minWidth: "100%",
    minHeight: "150%",
    backgroundSize: "cover",
    backgroundPosition: "center"
   
 };

class MovieList extends Component {



constructor(props) {
        super(props);
        this.state = {
            events: [],
        }
    };



    componentDidMount() {
        axios.get('http://localhost:8001/movies')
            .then(result => {
                this.setState({ events: result.data })
                console.log(this.state.events);
                // const title = result.data['movies'][0]['imdbID'];
                // this.setState({ title });
            })
            .catch(error => {
                console.log("Error Caught : " + error)
            })
    }

    render(){
      return(
      
       
        <div class="image-container justify-content-start " style={mystyle}>
          <div className='overlay align-items-center justify-content-center'>

        
        <section class="py-5 text-center container">
        <div class="row py-lg-5 ">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light" style={{color: "black"}}>Welcome to the Events Page!</h1>
            <p class="lead text-muted" style={{color: "black"}}>Scroll down further to explore all our latest events :) </p>
            <p class="lead text-muted" style={{color: "black"}}>Have any upcoming events in your region? Keep us posted on the details <NavLink to="/add-events">here</NavLink>!</p>
          </div>
        </div>
      </section>

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {this.state.events.map((event,index) =>{
                    return(
          <div class="col">

                      
          <div class="card shadow-sm">


            
            <img
          className="d-block w-100 "
          src={event.poster} 
          alt="First slide"
          width="300px"
          height="300px"
         
          


         
          
        />
     

            <div className="card-body w-100">
           
            <p class="card-text" >{event.name}</p>
            <p class="card-text" >{event.date}</p>
            

              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
               
                  
                  
                </div>
                <small class="text-muted">{event.region}</small>
              </div>



            </div>
</div>

          

        </div>
        )
    })}

      </div>

      
      </div>
                   </div>
                  



      )
  }
}

export default MovieList;

