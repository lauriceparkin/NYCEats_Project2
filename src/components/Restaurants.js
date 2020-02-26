import React from 'react';
import { Link } from 'react-router-dom'

function Restaurants(props) {
  return (
    <div className='result'>
      {props.eatery.dba}
      {props.eatery.grade}


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