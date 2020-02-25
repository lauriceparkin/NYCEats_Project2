import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Home from './components/Home'
import Boros from './components/Boros'
import './App.css';
// import axios from 'axios';



class App extends Component {
  render() {
    return (
      <div>
        {/* <nav>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Boros">Boros</Link>
          </li>
        </nav> */}

        <main>
          <Route
            exact path="/" component={Home}
          />

          <Route
            path="/Boros" component={Boros}
          />

        </main>

      </div>

    );
  }
}




export default App;
