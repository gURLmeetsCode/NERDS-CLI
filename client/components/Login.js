import React from 'react'
import {connect} from 'react-redux'
import LocalLoginForm from './local-login-form'
import OauthLogin from './OauthLogin'
import SignUpForm from './SignUp'
import {getLoggedInUserThunk } from '../reducers/index'


const Login = (props) => {

  const {handleSubmit} = props

  return (
    <div>
      <h1 className='form-title'>Member Login</h1>
      <div>
        <LocalLoginForm handleSubmit={handleSubmit}/>
        <OauthLogin />
      </div>
    </div>
  )
}
const mapDispatchToProps = (dispatch, ownProps) => {

  const history = ownProps.history

  return {
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(getLoggedInUserThunk ({email, password}))
      .then(() => {
        history.push('/home')
      })
    }
  }
}
export default connect(null, mapDispatchToProps)(Login)
