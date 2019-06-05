import React from 'react'
import Button from '@material-ui/core/Button';


const LocalLoginForm = (props) => {
  const {handleSubmit} = props
  return (
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
          <Button variant="contained" type='submit' id='submit-btn'>
            Submit
          </Button>
        </div>
      </div>
    </form>
  )
}

export default LocalLoginForm
