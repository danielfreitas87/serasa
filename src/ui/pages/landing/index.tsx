import React, { Component } from 'react'
import Home from '../home'
import Login from '../login'

export default class Landing extends Component {
  componentDidMount() {
    console.log('foi')
  }
  render() {
    return <div>Teste</div>
    // return isUserLoggedIn ? (
    //   <Home />
    // ) : (
    //   <Login />
    // )
  }
}
