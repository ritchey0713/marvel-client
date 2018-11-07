import React, {Component} from 'react'
import { connect } from 'react-redux'
import { getAllHeroes } from '../actions/heroes.js'

class AllHeroes extends Component {

  componentDidMount(){
    this.props.getAllHeroes()
  }

  render(){
    return(
      <div>
        hello there!
      </div>
    )
  }



}
