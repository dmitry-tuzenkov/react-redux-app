import React from 'react'
import PropTypes from 'prop-types'
import * as Blueprint from '@blueprintjs/core'

export const Loader = ({ isLoading }) => (
  <Blueprint.Spinner className='' />
)

Loader.propTypes = {
  isLoading : PropTypes.bool.isRequired
}

export default Loader
