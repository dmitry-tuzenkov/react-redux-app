export const ORDERS_QUERY_SHIPMENT_TYPE = 'ORDERS_QUERY_SHIPMENT_TYPE'

export function filterByShipmentTypeAction (payload = null) {
  return {
    type: ORDERS_QUERY_SHIPMENT_TYPE,
    payload
  }
}

export const ACTION_HANDLERS = {
  [ORDERS_QUERY_SHIPMENT_TYPE] : (state, action) => Number(action.payload)
}

export default function reducer (state = 0, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
