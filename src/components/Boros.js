import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import Restaurants from './Restaurants'


class Boros extends Component {
  constructor(props) {
    super(props);
    this.state = {
      zip: '',
      grade: 'A',
      data: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }





  // fetchBrooklyn = async () => 
  //   try {

  //     // const brooklyn = await axios.get(
  //     //   `https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=Brooklyn`
  //     // )
  //     // console.log(brooklyn)
  //     // this.setState({
  //     //   data: brooklyn
  //     // })

  //   // } catch (error) {
  //   //   console.error(error)
  //   }


  // `https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=Brooklyn&zipcode=${userinputfromzip}&grade=${}`

  handleChange = event => {
    const { target: { name, value } } = event
    console.log(name)
    console.log(value)

    this.setState({
      [name]: value
    })
  }


  async handleSubmit(event) {
    event.preventDefault();
    const response = await axios.get(`https://data.cityofnewyork.us/resource/43nn-pn8j.json?boro=Brooklyn&zipcode=${this.state.zip}&grade=${this.state.grade}`, {
      params: {
        $limit: 40
      }
    })
    console.log(response)
    this.setState({
      data: response.data
    })
  }



  render() {


    return (
      <div className="background">


        <div>
          <Link to='/'><p className="home">home</p></Link>

          <p className="boroleft">brooklyn/</p>

        </div>

        <div className="explanation">
          <p>there will be a couple of lines of text here explaining restaurant grades.</p>
        </div>

        <div>

          <form onSubmit={this.handleSubmit}>

            <label>Enter a BK zip code: </label>
            <input
              onChange={this.handleChange}
              type="text"
              value={this.state.zip}
              id="zip"
              name="zip"
            />

            <label>
              Choose your grade:
              <select value={this.state.grade} onChange={this.handleChange} name="grade">
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
              </select>
            </label>




            {/* on click listener here link to submit function make*/}
            <button type="submit">Eat Clean</button>

          </form>

        </div>

        <br></br>
        <div className="allResults">
          {
            this.state.data.length > 0 &&
            <>
              {this.state.data.map((restaurant, index) =>

                <Restaurants
                  key={index}
                  eatery={restaurant}
                />
              )}
            </>
          }



        </div>



      </div>

    )
  }
}



export default Boros