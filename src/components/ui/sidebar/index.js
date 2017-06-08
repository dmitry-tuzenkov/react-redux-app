import React from 'react'
import { IndexLink, Link } from 'react-router'
import './sidebar.scss'

export const Sidebar = () => (
  <sidebar>
    <nav>
      <IndexLink to='/' className='pt-button pt-minimal'> Home </IndexLink>
      <Link to='/warehouse' className='pt-button pt-minimal'> Warehouse </Link>
      <Link to='/orders' className='pt-button pt-minimal'> Orders </Link>
      <Link to='/scanner' className='pt-button pt-minimal'> Scanner </Link>
    </nav>
  </sidebar>
)

export default Sidebar
