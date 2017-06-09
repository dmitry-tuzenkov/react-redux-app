import { connect } from 'react-redux'
import { fetchAllAction } from '../modules/Orders'
import { fetchOrderShipmentTypesAction } from '../modules/ShipmentTypes'
import ShipmentFilter from '../components/ShipmentFilter'

const mapDispatchToProps = (dispatch) => ({
  onChange: () => dispatch(fetchAllAction()),
  // onChange: () => dispatch(fetchOrderShipmentTypesAction()),
  fetchOrderShipmentTypes: () => dispatch(fetchOrderShipmentTypesAction())
})

const mapStateToProps = (state) => ({
  ordersQuery : state.ordersQuery,
  shipmentTypes: state.ordersShipmentTypes,
  shipmentTypeId: 1008999 || state.ordersQuery.shipmentTypeId,
})

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentFilter)
