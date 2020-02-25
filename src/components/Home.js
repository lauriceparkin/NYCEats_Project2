import React from 'react'
import { Link } from 'react-router-dom'

function Home(props) {
  return (
    <div class="app">
      <div>
        
        <Link to='/boros'><p className="boro"><a href="Brooklyn.html">*brooklyn/</a></p></Link>
        <p className="boro"><a href="Manhattan.html">manhattan/</a></p>
        <p className="boro"><a href="Queens.html">queens/</a></p>
        <p className="boro"><a href="Bronx.html">bronx/</a></p>
        <p className="boro"><a href="Statenisland.html">staten island/</a></p>
        <p className="nom">(*know before you nom, nyc)</p>
      </div>

      <div class="footer">
        <p class="copyright"><a href="about.html">about</a> : copyright &#169; 2020</p>
      </div>
    </div>
  )
}

export default Home;