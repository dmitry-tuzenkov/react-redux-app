import { fetchOrderByBarcode, updateOrderDataById } from '../../Orders/modules/Api'

export const SCANNER_FETCH_ORDER_REQUEST = 'SCANNER_FETCH_ORDER_REQUEST'
export const SCANNER_FETCH_ORDER_SUCCESS = 'SCANNER_FETCH_ORDER_SUCCESS'
export const SCANNER_FETCH_ORDER_FAILED = 'SCANNER_FETCH_ORDER_FAILED'
export const SCANNER_SCAN_ORDER_REQUEST = 'SCANNER_SCAN_ORDER_REQUEST'
export const SCANNER_SCAN_ORDER_SUCCESS = 'SCANNER_SCAN_ORDER_SUCCESS'
export const SCANNER_SCAN_ORDER_FAILED = 'SCANNER_SCAN_ORDER_FAILED'

export function fetchOrderByBarcodeAction (barcode) {
  return (dispatch, getState) => {
    dispatch({ type: SCANNER_FETCH_ORDER_REQUEST })
    // @TODO: do we need 'getState().scannerOrderBarcode'
    return fetchOrderByBarcode(barcode)
      .then(json => dispatch({
        type: SCANNER_FETCH_ORDER_SUCCESS,
        payload: json.length ? json[0] : null
      }))
      .catch(cause => dispatch({ type: SCANNER_FETCH_ORDER_FAILED, error: cause }))
  }
}

// TODO: Figure out with params
export function updateOrderStatusByIdAction () {
  return (dispatch, getState) => {
    // TODO: Resolve this function
    const updateOrderDataById = Promise.resolve




    const id = getState().scannerOrder.id
    const data = {
        // status: 'READY'
    }
    dispatch({ type: SCANNER_SCAN_ORDER_REQUEST })
    return updateOrderDataById(id, data)
      .then(json => dispatch({ type: SCANNER_SCAN_ORDER_SUCCESS, payload: null }))
      .catch(cause => dispatch({ type: SCANNER_SCAN_ORDER_FAILED, error: cause }))
  }
}

export const actions = {
  fetchOrderByBarcodeAction,
  updateOrderStatusByIdAction
}

const ACTION_HANDLERS = {
  [SCANNER_FETCH_ORDER_REQUEST] : (state, action) => null,
  [SCANNER_FETCH_ORDER_SUCCESS] : (state, action) => action.payload,
  [SCANNER_FETCH_ORDER_FAILED] : (state, action) => action.error
}

export default function reducer (state = null, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
