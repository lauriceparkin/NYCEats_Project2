import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div className="app">
      <div className="links">
        <Link to='/boros/brooklyn'><p className="boro">brooklyn/*</p></Link>
        <Link to='/boros/manhattan'><p className="boro">manhattan/</p></Link>
        <Link to='/boros/queens'><p className="boro">queens/</p></Link>
        <Link to='/boros/bronx'><p className="boro">bronx/</p></Link>
        <Link to='/boros/staten-island'><p className="boro">staten island/</p></Link>
        <p className="nom">(*know before you nom, nyc)</p>
      </div>
    </div >
  )
}

export default Home;