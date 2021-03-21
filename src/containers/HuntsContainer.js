import { Component } from 'react'
import React from 'react'
import {connect} from 'react-redux'
import { fetchHunts } from '../actions/huntActions'
import NewMexicoHunts from '../components/NewMexicoHunts'
import TexasHunts from '../components/TexasHunts'
import Rates from '../components/Rates'
import {
    Switch,
    Route
  } from "react-router-dom";


class HuntsContainer extends Component {
   
    componentDidMount(){
      this.props.fetchHunts()
    }

    newMexicoHunts(){
      return this.props.hunts.map(hunt => {
        if(hunt.location === 'New Mexico'){
          return <NewMexicoHunts hunt={hunt} />
        }
      })
    }

    texasHunts(){
      return this.props.hunts.map(hunt => {
        if(hunt.location === 'Texas'){
          return <TexasHunts hunt={hunt} />
        }
      })
    }

    rates(){
        return this.props.hunts.map(hunt => <Rates hunt={hunt}/>)
    }

    render(){
        return (
            <div>
                <Switch>
                    <Route exact path='/NewMexicoHunts'>
                       {this.props.loading ? <h3>Loading...</h3> : this.newMexicoHunts()}
                    </Route>
                    <Route exact path='/TexasHunts'>
                         {this.props.loading ? <h3>Loading...</h3> : this.texasHunts()}
                    </Route>
                    <Route exact path='/Rates'>
                        {this.props.loading ? <h3>Loading...</h3> : this.rates()}
                    </Route>
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        hunts: state.hunts,
        laoding: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchHunts: () => dispatch(fetchHunts())
    
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(HuntsContainer)