import * as Api from './Api'

export const ORDER_OFFER_TYPES_REQUEST = 'ORDER_OFFER_TYPES_REQUEST'
export const ORDER_OFFER_TYPES_SUCCESS = 'ORDER_OFFER_TYPES_SUCCESS'
export const ORDER_OFFER_TYPES_FAILED = 'ORDER_OFFER_TYPES_FAILED'

export function fetchOrderOfferTypesAction () {
  return (dispatch, getState) => {
    dispatch({ type: ORDER_OFFER_TYPES_REQUEST })
    return Api
      .fetchOrderOfferTypes()
      .then(json => dispatch({ type: ORDER_OFFER_TYPES_SUCCESS, payload: json }))
      .catch(cause => dispatch({ type: ORDER_OFFER_TYPES_FAILED, error: cause }))
  }
}

export const actions = {
  fetchOrderOfferTypesAction
}

const ACTION_HANDLERS = {
  [ORDER_OFFER_TYPES_REQUEST] : (state, action) => state,
  [ORDER_OFFER_TYPES_SUCCESS] : (state, action) => action.payload,
  [ORDER_OFFER_TYPES_FAILED] : (state, action) => action.error
}

export default function reducer (state = [], action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
