import React, { Component } from 'react';
import RestaurantList from './components/RestaurantList';
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // restaurants: []
    };
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

        // console.table(ratings);
        // for (let i of ratings) {
        //   console.log(i);
        // }
        // console.table(restaurantResponse.data);
        // calculate ratings
        // let ratings = {};
        // for (let i of reviewResponse.data) {
          // console.log(i);
          // ratings[i.restaurant] = ratings[i.restaurant] || 0;
          // ratings.count = 0;
          // if (ratings[i.restaurant] !== 0 || ratings[i.restaurant] != undefined)  {
          //   ratings[i.restaurant] += i.stars;
          //   ratings.count += 1;
          // }

        // }

        // console.table(ratings);
        // for (let i of Object.keys(ratings)) {
        //   console.log(i, ratings[i]);
        // }

        // merge ratings in
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

        console.table(restaurants);

        this.setState({
          restaurants
        }, () => console.log('Data set.'))

      }));

    // axios.get('https://restrest.herokuapp.com/dusan-vesic/restaurant')
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       restaurants: response.data
    //     }, () => console.log('set'))
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
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
