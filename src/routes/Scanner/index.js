import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : '/scanner',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const scanner = require('./modules/Scanner')
      const order = require('./modules/Order')
      const scannerContainer = require('./containers/ScannerContainer').default

      injectReducer(store, { key: 'scannerOrder', reducer: order.default })
      injectReducer(store, { key: 'scannerOrderBarcode', reducer: scanner.default })

      cb(null, scannerContainer)
    }, 'orders')
  }
})
