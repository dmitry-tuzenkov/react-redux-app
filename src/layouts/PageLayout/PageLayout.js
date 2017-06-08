import React from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/ui/header'
import Sidebar from '../../components/ui/sidebar'
import './PageLayout.scss'

export const PageLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <Sidebar />
    <div className='page-layout__viewport'>
      {children}
    </div>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.node,
}

export default PageLayout
