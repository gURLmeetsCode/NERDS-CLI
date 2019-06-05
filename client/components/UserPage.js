import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {getALoggedOutUserThunk as logout} from '../reducers/index'
import Button from '@material-ui/core/Button';

const UserPage = (props) => {
  const {user, handleClick} = props

  if (!user.id) {
    return <Redirect to='/' />
  }

  return (
    <div>
      <div className="hero">
        <h1 className="user-title">Welcome, {user.email}!</h1>
      </div>
      <div className="lgout-btn-container">
        <Button variant="contained" type='submit' id="logout-btn" onClick={handleClick}>
            Logout
        </Button>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleClick () {
      dispatch(logout())
        .then(() => {
          ownProps.history.push('/')
        })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPage)
