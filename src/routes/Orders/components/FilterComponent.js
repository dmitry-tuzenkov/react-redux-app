import React from 'react'
import PropTypes from 'prop-types'
// import Select from '../../../components/ui/select'
import { Button } from '../../../components/ui/button'

export const FilterComponent = ({ query, fetchByQuery }) => (
  <div>
    <div> SELECT </div>
    <div> shipmentType: {query.shipmentType}</div>
    <div> amountType: {query.amountType}</div>
    <div> offerType: {query.offerType}</div>
    <div> packType: {query.packType}</div>
    <div> / SELECT </div>
    <Button onClick={fetchByQuery} label='- (Fetch All) -' />
  </div>
)

FilterComponent.propTypes = {
  query: PropTypes.object.isRequired,
  fetchByQuery: PropTypes.func.isRequired,
}

export default FilterComponent
