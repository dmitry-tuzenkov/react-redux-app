import React from 'react'
import PropTypes from 'prop-types'
// import Select from 'react-select'
import { Button } from '../../../components/ui/button'

export const FilterComponent = ({ query }) => (
  <div>
    <div> shipmentType: {query.shipmentType}</div>
    <div> amountType: {query.amountType}</div>
    <div> offerType: {query.offerType}</div>
    <div> packType: {query.packType}</div>
    <Button onClick={onClick} label='Fetch All' />
  </div>
)

function onClick (e) {

}

FilterComponent.propTypes = {
  query: PropTypes.object.isRequired,
}

export default FilterComponent
