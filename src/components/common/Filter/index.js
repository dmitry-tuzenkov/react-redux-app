import React from 'react'
import PropTypes from 'prop-types'

export const FilterComponent = ({ name, value, list, onChange }) => {
  const onClick = (e) => onChange(e.target.value)

  return (
    <div>
      <select name={name} value={value} onChange={onClick}>
        { list.map((item) => render(item)) }
      </select>
    </div>
  )
}

FilterComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  list: PropTypes.array.isRequired
}

function render (item) {
  return (
    <option key={item.id} value={item.id}> {item.name} </option>
  )
}

export default FilterComponent
