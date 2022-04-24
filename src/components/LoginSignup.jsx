import React from 'react'
import '../Style/style1.css'
const LoginSignup = () => {
  return (
    <div>
 <div className="contex">
      <img class="TMN-logo" src="./logo/ROOMMATE-logo-black.png" alt=""/>
    </div>
  <div className="container">
    <input type="checkbox" id="flip"/>
    <div className="cover">
      <div className="back">

        {/*  <div className="text">
          <span class="text-1">Complete journey <br> with one step</span>
          <span class="text-2">Let's get started</span>
        </div>  */}
      </div>
    </div>
    <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
          <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="text"><a href="#">Forgot password?</a></div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Don't have an account ? <label for="flip">Sigup now</label></div>
            </div>
        </form>
      </div>
        <div className="signup-form">
          <div className="title">Signup</div>
        <form action="#">
            <div className="input-boxes">
              <div className="input-box">
                <i class="fas fa-user"></i>
                <input type="text" placeholder="Enter your name" required/>
              </div>
              <div className="input-box">
                <i class="fas fa-envelope"></i>
                <input type="text" placeholder="Enter your email" required/>
              </div>
              <div className="input-box">
                <i class="fas fa-lock"></i>
                <input type="password" placeholder="Enter your password" required/>
              </div>
              <div className="button input-box">
                <input type="submit" value="Sumbit"/>
              </div>
              <div className="text sign-up-text">Already have an account ? <label for="flip">Login now</label></div>
            </div>
      </form>
    </div>
    </div>
    </div>
  </div>


    </div>
  )
}

export default LoginSignup