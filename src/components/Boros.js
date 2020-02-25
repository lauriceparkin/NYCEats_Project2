import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'


class Boros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      data: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('typing')
    this.setState({
      zip: event.target.value
      //need something for boros
    });
  }


  componentDidMount() {
    this.fetchBrooklyn()
  }
  fetchBrooklyn = async () => {
    try {

      const brooklyn = await axios.get(
        `https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=Brooklyn`
      )
      console.log(brooklyn)
      this.setState({
        data: brooklyn
      })

    } catch (error) {
      console.error(error)
    }
  }
   

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div className="background">

        {/* <body style="background-color:gray"> */}

        <div>
          <Link to='/'><p className="home">home</p></Link>

          <p className="boroleft">brooklyn/</p>

        </div>

        <div className="explanation">
          <p>there will be a couple of lines of text here explaining restaurant grades.</p>
        </div>

        <div>

          <form>

            <label>Enter a BK zip code: </label>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.zip}
              id="zip"
              name="zip"
            />
            <label>Choose your grade:</label>

            <select className="grade">
              <option>A</option>
              <option>B</option>
              <option>C</option>
            </select>
            {/* on click listener here link to submit function make*/}
            <button type="submit">Nom in the know</button>

          </form>

        </div>

        <br></br>
        <div className="allResults">

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade:</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

          <div className="results">
            <p>Restaurant Name</p>
            <p>Cuisine</p>
            <p>Address</p>
            <p>Grade</p>
          </div>

        </div>


        {/* </body> */}

      </div>

    )
  }
}



export default Boros