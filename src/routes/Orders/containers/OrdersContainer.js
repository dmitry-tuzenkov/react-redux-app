import { connect } from 'react-redux'
import { fetchAllAction } from '../modules/Orders'

import OrdersComponent from '../components/OrdersComponent'

const mapDispatchToProps = (dispatch) => ({
  fetchAll: () => dispatch(fetchAllAction())
})

const mapStateToProps = (state) => ({
  orders : state.orders
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersComponent)
