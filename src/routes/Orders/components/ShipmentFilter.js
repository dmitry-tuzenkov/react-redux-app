import React from 'react'
import PropTypes from 'prop-types'
import CommonFilter from '../../../components/common/Filter'
import { Button } from '../../../components/ui/button'

export const ShipmentFilter = ({ shipmentTypeId, shipmentTypes, onChange }) => (
  <div>
    <CommonFilter
      property={shipmentTypeId} list={shipmentTypes} onChange={onChange} />
    <Button onClick={onChange} label='(onChange)' />
  </div>
)
ShipmentFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  shipmentTypes: PropTypes.array.isRequired,
  shipmentTypeId: PropTypes.number.isRequired,
}

export default ShipmentFilter
