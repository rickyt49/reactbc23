import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {
  render() {

    if(!localStorage.getItem('username')){
        return <Redirect to='/login'/>
    }
    return (
      <div>Profile</div>
    )
  }
}
