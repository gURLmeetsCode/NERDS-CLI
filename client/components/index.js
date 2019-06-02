import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {AllUsers} from './AllUsers'

export class Welcome extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <AllUsers />
      </div>
    )
  }
}
