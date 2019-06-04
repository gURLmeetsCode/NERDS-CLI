import React, {Component} from 'react'

import Login from './Login'

export default class Root extends Component {
   constructor () {
     super()
   }


  componentDidMount(){

  }

  render(){
    return (
      <div>
        <Login/>
      </div>
    )
  }
}
