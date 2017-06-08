import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Header = () => (
  <header>
    <nav className='pt-navbar pt-dark'>
      <div className='pt-navbar-group pt-align-left'>
        <div className='pt-navbar-heading'> Everad Crm Warehouse </div>
      </div>
      <div className='pt-navbar-group pt-align-left'>
        <div className='pt-input-group .modifier'>
          <span className='pt-icon pt-icon-search' />
          <input className='pt-input' type='search' placeholder='Search orders' dir='auto' />
        </div>
      </div>
      <div className='pt-navbar-group pt-align-right'>
        <IndexLink to='/' className='pt-button pt-minimal'> Warehouse </IndexLink>
        <Link to='/scanner' className='pt-button pt-minimal'> Scanner </Link>
        <Link to='/counter' className='pt-button pt-minimal'> (Counter) </Link>
        <span className='pt-navbar-divider' />
        <button className='pt-button pt-minimal pt-icon-notifications' />
        <button className='pt-button pt-minimal pt-icon-user' >
          username
        </button>
      </div>
    </nav>
  </header>
)

export default Header
