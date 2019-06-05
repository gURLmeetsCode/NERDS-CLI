import React from 'react'

const OauthLogin = (props) => {
  return (
    <form className='google-container' method='get' action='/auth/google'>
      <button className="google-btn" type='submit'><img className="google-icon" src="images/google.png"  alt="google icon"/></button>
    </form>
  )
}

export default OauthLogin
