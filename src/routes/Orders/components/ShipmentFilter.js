import React from 'react'
import PropTypes from 'prop-types'
import CommonFilter from '../../../components/common/Filter'
import { Button } from '../../../components/ui/button'

export const ShipmentFilter = ({ shipmentType, shipmentTypes, onChange }) => {
  return (
    <div>
      <CommonFilter list={shipmentTypes} value={shipmentType} onChange={onChange} />
      <Button onClick={onChange} label='(onChange)' />
    </div>
  )
}

ShipmentFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  shipmentTypes: PropTypes.array.isRequired,
  shipmentType: PropTypes.number,
}

export default ShipmentFilter
