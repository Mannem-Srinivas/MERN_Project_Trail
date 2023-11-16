import React from 'react'
import { Link } from 'react-router-dom'
import LoginValidation from './LoginValidation';


function Login() {
    const [values,setValues]=React.useState({
        email:'',
        password:''
    })

    const [errors, setErrors]=React.useState({})
    const handleInput =(event) =>{
        setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));

    }

    const handleSubmit =(event) =>{
        event.preventDefault();
        setErrors(LoginValidation(values));
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
      <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='Enter Email' name='email'
                onchange={handleInput} className='form-control rounded-0'/>
                {errors.email && <span className='text-danger'> {errors.email}</span>}
            </div>
            <div className='mb-3'>
                <label htmlFor="password">Password</label>
                <input type="password" placeholder='Enter Password' name='password'
                onchange={handleInput} className='form-control rounded-0'/>
                {errors.password && <span className='text-danger'> {errors.password}</span>}
            </div>
            <button type='submit' className='btn btn-sucess w-100 rounded-0'>Log in</button>
            <p>You are agree to aur terms and policies</p>
            <Link to="/Signup" className='btn btn-default border w-100 bg-light rounded-0 text-decoration'>Create Account</Link>
        </form>
      </div>
    </div>
  )
}

export default Login;