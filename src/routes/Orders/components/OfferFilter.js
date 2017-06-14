import React from 'react'
import PropTypes from 'prop-types'
import CommonFilter from '../../../components/common/Filter'
// import { Button } from '../../../components/ui/button'

export const OfferFilter = ({ offerType, offerTypes, onChange }) => {
  return (
    <div>
      <CommonFilter name='offerType' list={offerTypes} value={offerType} onChange={onChange} />
    </div>
  )
}

OfferFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
  offerTypes: PropTypes.array.isRequired,
  offerType: PropTypes.number.isRequired,
}

export default OfferFilter
