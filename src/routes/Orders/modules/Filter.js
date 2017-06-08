import * as Api from './Api'

export const ORDER_QUERY_REQUEST = 'ORDER_QUERY_REQUEST'
export const ORDER_QUERY_SUCCESS = 'ORDER_QUERY_SUCCESS'
export const ORDER_QUERY_SHIPMENT_TYPE = 'ORDER_QUERY_SHIPMENT_TYPE'
export const ORDER_QUERY_AMOUNT_TYPE = 'ORDER_QUERY_AMOUNT_TYPE'
export const ORDER_QUERY_OFFER_TYPE = 'ORDER_QUERY_OFFER_TYPE'
export const ORDER_QUERY_PACK_TYPE = 'ORDER_QUERY_PACK_TYPE'
export const ORDER_QUERY_FAILED = 'ORDER_QUERY_FAILED'

export const orderQueryState = {
  packType: null,
  offerType: null,
  amountType: null,
  shipmentType: null
}

export function fetchAllAction () {
  return (dispatch, getState) => {
    dispatch({ type: ORDER_QUERY_REQUEST })
    // TODO: ChangeIt
    return Api
      .fetchOrdersByQuery(getState().query)
      .then(json => dispatch({ type: ORDER_QUERY_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_QUERY_FAILED, error: cause }))
  }
}

export function fetchOrderShipmentTypesAction () {
  return (dispatch, getState) => {
    return Api
      .fetchOrderShipmentTypes()
      .then(json => dispatch({ type: ORDER_QUERY_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_QUERY_FAILED, error: cause }))
  }
}

export function fetchOrderOfferTypesAction () {
  return (dispatch, getState) => {
    return Api
      .fetchOrderOfferTypes()
      .then(json => dispatch({ type: ORDER_QUERY_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_QUERY_FAILED, error: cause }))
  }
}

export function fetchOrderPackTypesAction () {
  return (dispatch, getState) => {
    return Api
      .fetchOrderPackTypes()
      .then(json => dispatch({ type: ORDER_QUERY_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_QUERY_FAILED, error: cause }))
  }
}

export function fetchOrderAmountTypesAction () {
  return (dispatch, getState) => {
    return Api
      .fetchOrderAmountTypes()
      .then(json => dispatch({ type: ORDER_QUERY_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_QUERY_FAILED, error: cause }))
  }
}

export const actions = {
  fetchOrderPackTypesAction,
  fetchOrderOfferTypesAction,
  fetchOrderAmountTypesAction,
  fetchOrderShipmentTypesAction
}

const ACTION_HANDLERS = {
  [ORDER_QUERY_REQUEST] : (state, action) => state,
  [ORDER_QUERY_SUCCESS] : (state, action) => action.payload,
  [ORDER_QUERY_FAILED] : (state, action) => action.error
}

export default function reducer (state = orderQueryState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
