export const ORDERS_QUERY_OFFER_TYPE = 'ORDERS_QUERY_OFFER_TYPE'

export function filterByOfferTypeAction (payload = null) {
  return {
    type: ORDERS_QUERY_OFFER_TYPE,
    payload
  }
}

export const ACTION_HANDLERS = {
  [ORDERS_QUERY_OFFER_TYPE] : (state, action) => Number(action.payload)
}

export default function reducer (state = 0, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
