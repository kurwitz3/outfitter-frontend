import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/huntActions'
import Reviews from '../components/Reviews'
import ReviewForm from '../components/ReviewForm'
import {
    Switch,
    Route
  } from "react-router-dom";


  class ReviewsContainer extends Component{
    
    componentDidMount(){
      this.props.fetchReviews()
    }

    handleReviews(){
        return this.props.reviews.map(review => <Reviews review={review}/>)
    }

    render(){
      return(
        <div>
          <ReviewForm />
             <Switch>
                <Route exact path='/Reviews'>
                  {this.props.loading ? <h3>Loading...</h3> : this.handleReviews()}
                </Route>
              </Switch>
        </div>
      )
    }
}

const mapStateToProps = state =>{
    return { 
        reviews: state.reviews,
        laoding: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchReviews: () => dispatch(fetchReviews())
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(ReviewsContainer)