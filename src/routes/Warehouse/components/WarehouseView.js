import React from 'react'
import { Button } from '../../../components/ui/button'

export const WarehouseView = () => (
  <div>
    <h4>Welcome From Warehouse View!</h4>
    <Button onClick={onClick} label='WarehouseView' />
  </div>
)

function onClick (e) {
  alert('Gotcha!')
}

export default WarehouseView
