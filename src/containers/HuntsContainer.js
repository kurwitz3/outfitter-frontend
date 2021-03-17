import { Component } from 'react'
import React from 'react'
import {connect} from 'react-redux'


class HuntsContainer extends Component {
    render(){
        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => {
    return { hunts: state.hunts}
}

const mapDispatchToProps = dispatch => {
    return 
}

export default connect(mapStateToProps,mapDispatchToProps)(HuntsContainer)