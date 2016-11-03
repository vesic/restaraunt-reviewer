import React, { Component } from 'react';
import RestaurantList from './components/RestaurantList';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurants: []
    };
  }

  componentDidMount() {
    axios.get('https://restrest.herokuapp.com/dusan-vesic/restaurant')
      .then((response) => {
        console.log(response);
        this.setState({
          restaurants: response.data
        }, () => console.log('set'))
      })
      .catch((error) => {
        console.log(error);
      });
  }

  renderRestaurants() {
    if (this.state.restaurants) {
      return (
        <RestaurantList restaurants={this.state.restaurants} />
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {this.renderRestaurants()}
        </div>
      </div>
    )
  }
}

export default App;
