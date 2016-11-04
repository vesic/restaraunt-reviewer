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
        axios.get('https://restrest.herokuapp.com/dusan-vesic/review/'),
        axios.get('https://restrest.herokuapp.com/dusan-vesic/user')
      ])
      .then(axios.spread((restaurantResponse, reviewResponse, userResponse) => {

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
          reviews: reviewResponse.data,
          users: userResponse.data
        }, () => {
          let filteredReviews = this.state.reviews.filter(review => review.restaurant === this.state.selectedRestaurant['_id']);
          this.setState({filteredReviews}, () => {
            //
          });
        });
        
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
      let filteredReviews = this.state.reviews.filter(review => review.restaurant === this.state.selectedRestaurant['_id']);
      this.setState({filteredReviews});
    });
  }

  deleteReview(review) {
    alert(review._id + ' deleted! But not really.')
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
            <ReviewList deleteReview={this.deleteReview} reviews={this.state.filteredReviews}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
