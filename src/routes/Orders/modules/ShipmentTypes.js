import * as Api from './Api'

export const ORDER_SHIPMENT_TYPES_REQUEST = 'ORDER_SHIPMENT_TYPES_REQUEST'
export const ORDER_SHIPMENT_TYPES_SUCCESS = 'ORDER_SHIPMENT_TYPES_SUCCESS'
export const ORDER_SHIPMENT_TYPES_FAILED = 'ORDER_SHIPMENT_TYPES_FAILED'

export const shipmentTypesState = []

export function fetchOrderShipmentTypesAction () {
  return (dispatch, getState) => {
    dispatch({ type: ORDER_SHIPMENT_TYPES_REQUEST })
    return Api
      .fetchOrderShipmentTypes()
      .then(json => dispatch({ type: ORDER_SHIPMENT_TYPES_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_SHIPMENT_TYPES_FAILED, error: cause }))
  }
}

export const actions = {
  fetchOrderShipmentTypesAction
}

const ACTION_HANDLERS = {
  [ORDER_SHIPMENT_TYPES_REQUEST] : (state, action) => state,
  [ORDER_SHIPMENT_TYPES_SUCCESS] : (state, action) => action.payload,
  [ORDER_SHIPMENT_TYPES_FAILED] : (state, action) => action.error
}

export default function reducer (state = shipmentTypesState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
