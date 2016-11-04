import React, { Component } from 'react';
import RestaurantList from './components/RestaurantList';
import SelectedRestaurant from './components/SelectedRestaurant';
import NavBar from './components/NavBar'
import PageHeader from './components/PageHeader'
import ReviewList from './components/ReviewList'
import axios from 'axios';
import _ from 'lodash';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredReviews: []
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
          selectedRestaurant: restaurants[0],
          reviews: reviewResponse.data
        }, () => {
          console.log('selectedRestaurant', this.state.selectedRestaurant['_id'])
          // console.log(reviewResponse.data.filter(rev => rev.restaurant === 'ZHVzYW4tdmVzaWMtcmVzdGF1cmFudHMtMQ=='))
          let filteredReviews = this.state.reviews.filter(review => review.restaurant == this.state.selectedRestaurant['_id']);
          this.setState({filteredReviews}, () => console.log('CHANGE'));
          console.log('filtered', filteredReviews)
        });
        
        // this.setState({
        //   restaurants,
        //   selectedRestaurant: restaurants[0]
        // }, () => { 
        //     console.log(this.state.restaurants)
        //     this.setState({
        //       'foo':'bar'
        //     }, () => console.log(this.state.fo))
        //     })
            
        
          })
        );
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
    this.setState({selectedRestaurant}, () => {
      let filteredReviews = this.state.reviews.filter(review => review.restaurant == this.state.selectedRestaurant['_id']);
      this.setState({filteredReviews}, () => console.log('omg', this.state.filteredReviews));
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <PageHeader />
          <div className="row">
            {this.renderRestaurants()}
            {this.renderSelectedRestaurant()}
          </div>
          <div className="row">
            <ReviewList reviews={this.state.filteredReviews}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
