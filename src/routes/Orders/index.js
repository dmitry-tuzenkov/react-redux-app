import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/orders',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      // const api = require('./modules/Api')
      const orders = require('./modules/Orders')
      // const filterProperty = require('./modules/Filter').default
      // const lookupProperty = require('./modules/FilterLookup').default
      const ordersContainer = require('./containers/OrdersContainer').default

      const orderOfferTypes = require('./modules/OfferTypes')
      const orderShipmentTypes = require('./modules/ShipmentTypes')
      // const orderOfferTypes = lookupProperty('ORDERS_OFFER_TYPES', api.fetchOrderOfferTypes)
      // const ordersQueryOfferType = filterProperty('ORDERS_QUERY_OFFER_TYPE', null)
      const ordersQueryOfferType = require('./modules/OfferFilter')
      const ordersQueryShipmentType = require('./modules/ShipmentFilter')
      // injectReducer(store, { key: 'ordersQuery', reducer: ordersFilter.default })
      injectReducer(store, { key: 'orders', reducer: orders.default })
      injectReducer(store, { key: 'orderOfferTypes', reducer: orderOfferTypes.default })
      injectReducer(store, { key: 'orderShipmentTypes', reducer: orderShipmentTypes.default })
      // injectReducer(store, { key: 'ordersQueryOfferType', reducer: ordersQueryOfferType.reducer })
      // injectReducer(store, { key: 'ordersQueryShipmentType', reducer: ordersQueryShipmentType.reducer })
      injectReducer(store, { key: 'ordersQueryOfferType', reducer: ordersQueryOfferType.default })
      injectReducer(store, { key: 'ordersQueryShipmentType', reducer: ordersQueryShipmentType.default })
      // store.dispatch(orders.fetchAllAction())
      store.dispatch(orderOfferTypes.fetchOrderOfferTypesAction())
      store.dispatch(orderShipmentTypes.fetchOrderShipmentTypesAction())

      cb(null, ordersContainer)
    }, 'orders')
  }
})
