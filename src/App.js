import logo from './logo.svg';
import './App.css';
import React, {Component} from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom"; //Configure the route
import Home from "./components/Home";
import About from "./components/About";
import Events from "./components/Events";
import Movie from "./components/Movie";
import MovieList from "./components/MovieList";
import AddEvents from "./components/AddEvents";

//Class Components
class App extends Component{

  state={
    loggedIn: false
  }

  // loginHandle = ()=>{
  //   this.setState({
  //     loggedIn: true
  //   })
  //   console.log(this.state.loggedIn)
  // }

  loginHandle = ()=>{
    this.setState(prevState=>({
      loggedIn: !prevState.loggedIn
    }))

  }
  render(){
    return(
      
       <Router>
         
          
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
        <ul class="navbar-nav">
          <li class="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/home">Find My Events &nbsp;</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/home">Home &nbsp;</NavLink>
          </li>
          <li class="nav-item">
            <NavLink className="nav-link" to="/about">About &nbsp;</NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" to="/events" id="dropdown08" data-bs-toggle="dropdown" aria-expanded="false">Events </NavLink>
            <ul class="dropdown-menu" aria-labelledby="dropdown08">
              <li><NavLink className="dropdown-item" to="/movie-list">View Events</NavLink></li>
              <li><NavLink className="dropdown-item" to="/add-events">Add Events </NavLink></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  
         <Route path="/" exact render={Home}/>
           <Route path="/home" render={Home}/>
           <Route path="/about" render={About}/>
           {/* <Route path="/contact" render={Contact}/> */}
           <Route path="/events" render={()=>(this.state.loggedIn? <Events/>: (<Redirect to="/"/>))}/>
           <Route path="/movie/:moviename" render={Movie}/>
           <Route path="/movie-list" component={MovieList}/>
           <Route path="/add-events" component={AddEvents}/>
       </Router>
      
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
