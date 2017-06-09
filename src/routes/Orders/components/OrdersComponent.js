import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '../../../components/ui/button'
import Table from '../../../components/ui/table'
import ShipmentFilter from '../containers/ShipmentFilterContainer'

const columns = [
  { Header: 'Id', accessor: 'id', width: 30 },
  { Header: 'Name', accessor: 'name' },
  { Header: 'Country', accessor: 'country' },
  { Header: 'Region', accessor: 'region' },
  { Header: 'City', accessor: 'city' },
  { Header: 'Customer', accessor: 'name' },
]

const options = {
  defaultPageSize: 10,
  showPagination: false
}

export const OrdersComponent = ({ fetchAll, orders }) => (
  <div>
    <h1> Orders </h1>
    <ShipmentFilter />
    <Table
      className='-striped -highlight'
      columns={columns}
      data={orders}
      {...options} />
    <Button onClick={fetchAll} label='fetchAll' />
  </div>
)

OrdersComponent.propTypes = {
  orders: PropTypes.array.isRequired,
  fetchAll: PropTypes.func.isRequired
}

export default OrdersComponent
