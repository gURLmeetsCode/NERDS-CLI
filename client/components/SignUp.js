import React from 'react'
import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {addANewUserThunk} from '../reducers/index'



const SignUpForm = (props) => {
  const {handleSubmit} = props

  return (
    <div>
      <h1 className='form-title'>Sign Up</h1>
    <form  className='form-submission' onSubmit={handleSubmit}>
      <div >
        <div >
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='input' />
        </div>
        <div >
          <label htmlFor='email'>Password</label>
          <input type='password' name='password' className='input' />
        </div>
        <div>
          <Button variant="contained" type='submit' id='create-btn'>
            Create An Account
          </Button>
        </div>
      </div>
    </form>
  </div>
  )
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    handleSubmit (evt) {
      evt.preventDefault()
      const email = evt.target.email.value
      const password = evt.target.password.value
      dispatch(addANewUserThunk({email, password}))
      ownProps.history.push('/home')
    }
  }
}

export default connect(null, mapDispatchToProps)(SignUpForm)
