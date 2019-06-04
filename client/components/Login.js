import React from 'react'
import {connect} from 'react-redux'

import {getLoggedInUserThunk } from '../reducers/index'

const Login = (props) => {

  const {handleSubmit} = props

  return (
    <div>
      <h1 className='form-title'>Member Login</h1>
      <div>
        <form className='form-submission' onSubmit={handleSubmit}>
          <div>
            <div>
              <label htmlFor='email'>Email</label>
              <input type='email' name='email' className='input' />
            </div>
            <div >
              <label htmlFor='email'>Password</label>
              <input type='password' name='password' className='input' />
            </div>
            <div>
              <button type='submit' className='submit-btn'>Submit</button>
            </div>
          </div>
        </form>
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
    }
  }
}
export default connect(null, mapDispatchToProps)(Login)
