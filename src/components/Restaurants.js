import React from 'react';
import { Link } from 'react-router-dom'
import '../App.css';

function Restaurants(props) {
  return (
    <div className="result">
      <p className="rest">{props.eatery.dba}</p>
      <p>{props.eatery.building} {props.eatery.street}</p>
      <p>{props.eatery.cuisine_description}</p>
      <p>{props.eatery.grade}</p>
    </div>
  )
}

export default Restaurants;






{/* <div className="result">
        <p>Restaurant Name</p>
        <p>Cuisine</p>
        <p>Address</p>
        <p>Grade</p>
      </div> */}