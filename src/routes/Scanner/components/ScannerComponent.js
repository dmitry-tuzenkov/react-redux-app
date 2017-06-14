import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../components/ui/button'

export const ScannerComponent = ({ order, orderBarcode, fetchOrder, scanOrder }) => {
  const onChange = (e) => {
    const barcode = Number(e.target.value)
    return barcode ? fetchOrder(barcode) : null
  }

  return (
    <div>
      <h1> Scanner </h1>
      <form>
        <input type='text' onChange={onChange} />
      </form>
      <h5> Order </h5>
      <div>
        { !orderBarcode ? 'Enter barcode...' : ''}
        { !order && orderBarcode ? 'There is no orders!' : '' }
        { order && orderBarcode ? renderOrder(order) : '' }
      </div>
      <Button onClick={scanOrder} label=' - SCAN - ' />
    </div>
  )
}

const renderOrder = (order) => (
  <div>
    id: { order.id } /
    name: { order.name } /
    barcode: { order.barcode } /
  </div>
)

ScannerComponent.propTypes = {
  order: PropTypes.object,
  orderBarcode: PropTypes.number,
  fetchOrder: PropTypes.func.isRequired,
  scanOrder: PropTypes.func.isRequired
}

export default ScannerComponent
