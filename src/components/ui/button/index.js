import React from 'react'
import PropTypes from 'prop-types'
import * as Blueprint from '@blueprintjs/core'

export const Button = ({ onClick, label }) => (
  <Blueprint.Button onClick={onClick} text={label} />
)

Button.propTypes = {
  onClick : PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default Button
