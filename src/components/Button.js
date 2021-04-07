import React from 'react'


class Button extends React.Component{

    state={
        likes: 0
    }

    handleClick = () => {
      this.setState(prevState => {
         return {likes: prevState.likes + 1}
             
      })
    
    }



    render(){
        return (
            <div>
              <p>{this.state.likes}</p>
              <button onClick={this.handleClick}>Likes</button>
            </div>
        )
    }
}

export default Button 