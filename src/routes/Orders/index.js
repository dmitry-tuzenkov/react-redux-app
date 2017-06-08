import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/orders',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const orders = require('./modules/Orders')
      const ordersFilter = require('./modules/Filter')
      const ordersContainer = require('./containers/OrdersContainer').default

      injectReducer(store, { key: 'orders', reducer: orders.default })
      injectReducer(store, { key: 'ordersQuery', reducer: ordersFilter.default })

      store.dispatch(orders.fetchAllAction())
      cb(null, ordersContainer)
    }, 'orders')
  }
})
