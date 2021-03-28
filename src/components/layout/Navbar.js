import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar bg-primary'>
      <Link to='/'>
        <h1>Infinite Scroll & Pagination</h1>
      </Link>
      <ul>
        <li>
          <Link to='/infinite'>Infinite Scroll</Link>
        </li>
        <li>
          <Link to='/pagination'>Pagination</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
