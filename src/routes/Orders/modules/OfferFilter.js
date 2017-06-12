export const ORDERS_QUERY_OFFER_TYPE = 'ORDERS_QUERY_OFFER_TYPE'

export const ACTION_HANDLERS = {
  [ORDERS_QUERY_OFFER_TYPE] : (state, action) => state
}

export default function reducer (state = null, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
