import React from 'react'
import PropTypes from 'prop-types'

export const FilterComponent = ({ property, list, onChange }) => (
  <div>
    -- FilterComponent --
    Property: {property} List: {list.length} / FilterComponent
  </div>
)

FilterComponent.propTypes = {
  onChange: PropTypes.func,
  property: PropTypes.number, // .isRequired,
  list: PropTypes.array
}

// function render (item) {
//   return <option value={item.id}> {item.label} </option>
// }

export default FilterComponent
