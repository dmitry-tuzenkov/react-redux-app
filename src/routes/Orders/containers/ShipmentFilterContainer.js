import { connect } from 'react-redux'
import { filterByShipmentTypeAction } from '../modules/ShipmentFilter'
import ShipmentFilter from '../components/ShipmentFilter'

const mapDispatchToProps = (dispatch) => ({
  onChange: (id) => dispatch(filterByShipmentTypeAction(id))
})

const mapStateToProps = (state) => ({
  shipmentTypes: state.orderShipmentTypes,
  shipmentType: state.ordersQueryShipmentType,
})

export default connect(mapStateToProps, mapDispatchToProps)(ShipmentFilter)
