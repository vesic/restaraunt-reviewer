import React, { Component } from 'react';
import RestaurantList from './components/RestaurantList';
import SelectedRestaurant from './components/SelectedRestaurant';
import NavBar from './components/NavBar'
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurants: []
    };
    this.setSelectedRestaurant = this.setSelectedRestaurant.bind(this);
  }

  componentDidMount() {

    axios.all([
        axios.get('https://restrest.herokuapp.com/dusan-vesic/restaurant'),
        axios.get('https://restrest.herokuapp.com/dusan-vesic/review/')
      ])
      .then(axios.spread((restaurantResponse, reviewResponse) => {

        let ratings = _(reviewResponse.data)
                    .groupBy(x => x.restaurant)
                    .map((value, key) => ({_id: key, starsCount: value}))
                    .value();

        let restaurants = restaurantResponse.data;
        for (let i of restaurants) {
          for (let j of ratings) {
            if (i._id === j._id) {
              i['ratings'] = j;
              break;
            } else {
              i['ratings'] = {starsCount: []}
            }
          }
        }

        // console.table(restaurants);

        this.setState({
          restaurants,
          selectedRestaurant: restaurants[0]
        }, () => console.log('State set'))

      }));
  }

  renderRestaurants() {
    if (this.state.restaurants) {
      return (
        <RestaurantList setSelectedRestaurant={this.setSelectedRestaurant} restaurants={this.state.restaurants} />
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  renderSelectedRestaurant() {
    if (this.state.restaurants) {
      return (
        <SelectedRestaurant restaurant={this.state.selectedRestaurant} />
      )
    } else {
      return (
        <div>Loading...</div>
      )
    }
  }

  setSelectedRestaurant(selectedRestaurant) {
    this.setState({selectedRestaurant})
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <div className="row">
          {this.renderRestaurants()}
          {this.renderSelectedRestaurant()}
          </div>
        </div>
      </div>
    )
  }
}

export default App;
