import React from 'react'
import { connect } from 'react-redux'

const Login = () => {
  return (
    <div>
         
          <form  className="login-form">
        <h3>Login</h3>
        <div>
          <label htmlFor="email" >Email:</label>
          <input type="email" name="email"  placeholder="Enter your Email"/>
        </div>
        <div>
          <label htmlFor="password" style={{padding: "15px"}}>Password:</label>
          <input type="password" name="password" placeholder="Enter password"/>
        </div>
        <button type="submit" className="btn btn-outline-primary m-5">Login</button>

      </form>
    </div>
  )
}

const mapDispatchToProps = () => ({


    

})

export default connect(mapDispatchToProps)(Login)
