import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/orders',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const orders = require('./modules/Orders')
      const ordersFilter = require('./modules/Filter')
      const shipmentTypes = require('./modules/ShipmentTypes')
      const ordersContainer = require('./containers/OrdersContainer').default

      injectReducer(store, { key: 'orders', reducer: orders.default })
      injectReducer(store, { key: 'ordersQuery', reducer: ordersFilter.default })
      injectReducer(store, { key: 'ordersShipmentTypes', reducer: shipmentTypes.default })

      store.dispatch(orders.fetchAllAction())
      store.dispatch(shipmentTypes.fetchOrderShipmentTypesAction())

      cb(null, ordersContainer)
    }, 'orders')
  }
})
