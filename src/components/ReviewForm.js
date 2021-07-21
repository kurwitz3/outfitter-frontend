import React, { Component } from 'react'
import { createReview } from '../actions/huntActions'
import { connect } from 'react-redux'
import '../CSS/Reviews.css'


class ReviewForm extends Component{

    state={
        name:'',
        date:'',
        content:''
    }

    handleChange = event => {
        const name = event.target.name
        const date = event.target.date
        const content = event.target.content
        const value = event.target.value 
          this.setState({
            [name]:value,
            [date]: value,
            [content]:value
          })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.createReview(this.state)
        this.setState({
            name: '',
            date:'',
            content:''
        })
    }
    render(){
        return(
            <div className='review__form-container'>
               <p className="review__form-paragraph">American Outfitters is committed to giving each hunter a one-of-a-kind 
                    hunting experience. We love to hear from our hunters about the experience they 
                    had with us. Please feel free to write about your experience below, and we hope to 
                    see you for a future hunt. 
               </p>  
                  <form className="review__form" onSubmit={(e) => this.handleSubmit(e)}>
                      <label for='name'>Your Name:</label>
                      <input type='text' name='name' onChange={(event) => this.handleChange(event)} value={this.state.name}></input>
                      <label for="date">Date of Hunt:</label>
                      <input type='text' name='date' onChange={(event) => this.handleChange(event)} value={this.state.date}></input>
                      <label for='content'>Your Review:</label>
                      <textarea  name='content' onChange={(event) => this.handleChange(event)} value={this.state.content}></textarea>
                      <button className="review-form__button">Submit</button>
                  </form>
            </div>
        )
    }
}

export default connect(null,{ createReview})(ReviewForm)