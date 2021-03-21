import React, { Component } from 'react'
import { createReview } from '../actions/huntActions'
import { connect } from 'react-redux'


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
            <div >
              <form className='form' onSubmit={(e) => this.handleSubmit(e)}>
                <p>American Outfitters is commited to giving each hunter a one of kind 
                    hunting experience. We love to here from our hunters about the expeirence they 
                    had with us. Please feel free to write about your experiece below and we hope to 
                    see you for a future hunt. 
                </p>  
                
                Your Name:<input type='text'  name='name'onChange={(event) => this.handleChange(event)} value={this.state.name}></input><br></br> <br></br> 
                Date of Hunt:<input type='text' name='date' onChange={(event) => this.handleChange(event)} value={this.state.date}></input><br></br><br></br>
                Your Review:<textarea  name='content' onChange={(event) => this.handleChange(event)} value={this.state.content}></textarea><br></br>
                <button>Submit </button>
              </form>
            </div>
        )
    }
}

export default connect(null,{ createReview})(ReviewForm)