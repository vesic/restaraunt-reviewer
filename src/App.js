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
      filteredReviews: [],
      loggedOnUser: {}
    };
    this.addReview = this.addReview.bind(this);
    this.setSelectedRestaurant = this.setSelectedRestaurant.bind(this);
    this.editReview = this.editReview.bind(this);
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
          this.setState({filteredReviews, loggedOnUser: this.state.users[0]}, () => {
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
        <SelectedRestaurant  addReview={this.addReview} restaurant={this.state.selectedRestaurant} loggedOnUser={this.state.loggedOnUser} />
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

  addReview(reviewText) {
    axios.post('https://restrest.herokuapp.com/review', {
        reviewText: reviewText
      })
      .then((response) => {
        console.log(response);
        /*
        if (response === 200) {
          // update state
        } else {
          // revert
        }
        */
      })
      .catch((error) => {
        console.log(error);
      });
  }
  
  deleteReview(review) {
    if (confirm("Are you sure?")) {
      axios.post(`https://restrest.herokuapp.com/review/${review._id}`)
        .then((response) => {
          console.log(response);
          /*
          if (response.status === 201) {
            
          }
          */
        })
        .catch((error) => {
          console.log(error);
        });
        // if created
        alert(review._id + ' deleted! But not really.')
    }
  }
  
  editReview(review, text) {
    axios.put('https://restrest.herokuapp.com/review', {
        id: review._id,
        text: text
      })
      .then((response) => {
        /*
        if (response === 201) {
          // update state
        }
        */
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
      
      // if created
      alert(review._id + '\nUpdated! But not really.')
  }
  
  render() {
    return (
      <div>
        <NavBar loggedOnUser={this.state.loggedOnUser}/>
        <div className="container">
          <PageHeader />
          <div className="row">
            {this.renderRestaurants()}
            {this.renderSelectedRestaurant()}
          </div>
          <div className="row">
            <ReviewList users={this.state.users}
              deleteReview={this.deleteReview}
              editReview={this.editReview}
              reviews={this.state.filteredReviews}
              loggedOnUser={this.state.loggedOnUser}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
