import React, {Component} from 'react'
import { connect } from 'react-redux'
import {getJSONDataThunk} from '../reducers/index'




class DisconnectedAllUsers extends Component {


  componentDidMount () {
    this.props.getUsers()
  }



  render () {
    return (
        <div>
          <h4>List of All Users</h4>
          {!this.props.users ? (
              <div>[]</div>
            ) : (
              this.props.users.map(user => (
                <div key={user.id}>
                  <p>Name: {user.name}</p>
                  <p>Email: {user.email}</p>
                </div>
              ))
            )}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})



const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getJSONDataThunk()),
})

export const AllUsers = connect(mapStateToProps, mapDispatchToProps)(DisconnectedAllUsers)
