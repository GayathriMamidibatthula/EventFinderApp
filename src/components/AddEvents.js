import React, { Component } from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";


class AddEvents extends Component{

    constructor(props) {
        super(props);
        this.state = {
            name: 'default',
            date: 'Jan 1st 1990',
            region: 'Mysore',
            poster: 'https://cdn3.vectorstock.com/i/1000x1000/25/97/fireworks-celebration-poster-template-vector-10872597.jpg'
        };
    }
    handleSubmit = event => {
        event.preventDefault();
        const details = {
            name: this.state.name,
            date: this.state.date,
            region: this.state.region,
            poster: this.state.poster
        };
        console.log(details);
         axios.post('http://localhost:8001/movies', details)
             .then(result => {
                 console.log('Event Added Successfully..!!' + result.data);
            })
             .catch(error => { console.log(error) })
    }

    handleChange = event => {
        event.preventDefault();
        const { name, value } = event.target;
        this.setState({ [name]: value })
        console.log(this.state);

    }
    render(){
        return(
<div className="container">
                <div className="p-5 mb-4 bg-light rounded-3 text-center">
                    <div className="container-fluid py-5">
                        <h1 className="display-5 fw-bold">Add New Event</h1>
                        <br />
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label>Event Name</label>
                                <input type="text"
                                    className="form-control"
                                    name="name"
                                    required
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Event Date</label>
                                <input type="text"
                                    className="form-control"
                                    name="date"
                                    required
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Event Region</label>
                                <input type="text"
                                    className="form-control"
                                    name="region"
                                    required
                                    onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Event Poster Link</label>
                                <input type="text"
                                    className="form-control"
                                    name="poster"
                                    required
                                    onChange={this.handleChange} />
                            </div>
                            <input type="submit" className="btn btn-secondary" value="Add Event"/>
                            <br/><br/>
                            <NavLink className="btn btn-info w-100" to="/movie-list">Back to Events Page</NavLink>

                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddEvents;