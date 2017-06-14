import { fetchOrdersByQuery } from './Api'

export const ORDER_FETCH_ALL_REQUEST = 'ORDER_FETCH_ALL_REQUEST'
export const ORDER_FETCH_ALL_COMPLETED = 'ORDER_FETCH_ALL_COMPLETED'
export const ORDER_FETCH_ALL_FAILED = 'ORDER_FETCH_ALL_FAILED'
export const ordersState = []

export function fetchAllAction () {
  return (dispatch, getState) => {
    const query = {
      offerId: getState().ordersQueryOfferType,
      shipmentId: getState().ordersQueryShipmentType
    }

    dispatch({ type: ORDER_FETCH_ALL_REQUEST })
    return fetchOrdersByQuery(query)
      .then(json => dispatch({ type: ORDER_FETCH_ALL_COMPLETED, payload: json }))
      .catch(cause => dispatch({ type: ORDER_FETCH_ALL_FAILED, error: cause }))
  }
}

export const actions = {
  fetchAllAction
}

const ACTION_HANDLERS = {
  [ORDER_FETCH_ALL_REQUEST] : (state, action) => state,
  [ORDER_FETCH_ALL_COMPLETED] : (state, action) => action.payload,
  [ORDER_FETCH_ALL_FAILED] : (state, action) => action.error
}

export default function reducer (state = ordersState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
