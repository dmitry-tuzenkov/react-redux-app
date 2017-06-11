import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/orders',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const orders = require('./modules/Orders')
      const filter = require('./modules/Filter').default
      const api = require('./modules/Api')
      const lookup = require('./modules/FilterLookup').default
      // const shipmentTypes = require('./modules/ShipmentTypes')
      const ordersContainer = require('./containers/OrdersContainer').default
      const orderOfferTypes = lookup('ORDERS_OFFER_TYPES', api.fetchOrderOfferTypes)
      const orderShipmentTypes = lookup('ORDERS_SHIPMENT_TYPES', api.fetchOrderShipmentTypes)
      const ordersQueryOfferType = filter('ORDERS_QUERY_OFFER_TYPE')
      const ordersQueryShipmentType = filter('ORDERS_QUERY_SHIPMENT_TYPE')

      injectReducer(store, { key: 'orders', reducer: orders.default })
      // injectReducer(store, { key: 'ordersQuery', reducer: ordersFilter.default })
      injectReducer(store, { key: 'orderOfferTypes', reducer: orderOfferTypes.reducer })
      injectReducer(store, { key: 'orderShipmentTypes', reducer: orderShipmentTypes.reducer })

      injectReducer(store, { key: 'ordersQueryShipmentType', reducer: ordersQueryShipmentType.reducer })
      injectReducer(store, { key: 'ordersQueryOfferType', reducer: ordersQueryOfferType.reducer })

      store.dispatch(orders.fetchAllAction())
      store.dispatch(orderOfferTypes.action())
      store.dispatch(orderShipmentTypes.action())

      cb(null, ordersContainer)
    }, 'orders')
  }
})
