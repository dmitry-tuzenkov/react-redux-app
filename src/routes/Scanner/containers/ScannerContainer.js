import { connect } from 'react-redux'
import { scanOrderBarcodeAction } from '../modules/Scanner'
import { fetchOrderByBarcodeAction, updateOrderStatusByIdAction } from '../modules/Order'

import OrdersComponent from '../components/ScannerComponent'

const mapDispatchToProps = (dispatch) => ({
  fetchOrder: (barcode) => {
    dispatch(scanOrderBarcodeAction(barcode))
    dispatch(fetchOrderByBarcodeAction(barcode))
  },
  scanOrder: () => dispatch(updateOrderStatusByIdAction()),
})

const mapStateToProps = (state) => ({
  order : state.scannerOrder,
  orderBarcode : state.scannerOrderBarcode
})

export default connect(mapStateToProps, mapDispatchToProps)(OrdersComponent)
