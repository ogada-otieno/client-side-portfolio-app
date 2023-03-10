import React from 'react'
import { Link } from 'react-router-dom'
import { useAuthContext } from '../hooks/useAuthContext'

// if user is not logged in, redirect to landing page
// if user is logged in, redirect to project page or home page

const NotFound = () => {
  const { user } = useAuthContext()

  return (
    (<div>
        <h2>Sorry</h2>
        <p>The page you are looking for does not exist</p>
        <p>Here are some helpful links:</p>
        <Link to="/">Where it all begins</Link><br/>
        <Link to='/signup'>Signup</Link><br/>
        <Link to='login'>Login</Link><br/>
        {user && <Link to='/projects'>Projects</Link>}
    </div>)
  )
}

export default NotFound