import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/form.css'
const Login = () => {
  return (
    <>
    <div id="login-form" className="_form" >
    <form>
        <h3>Login Here</h3>
        <label htmlFor="Email">Email</label>
        <input type="email" placeholder="Enter email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" name="password" />

        <Link to='/home'><button type="submit">LogIn</button></Link>        <Link to="/signup">Create a account</Link>
    </form>

        </div>
        
   </>
  )
}

export default Login