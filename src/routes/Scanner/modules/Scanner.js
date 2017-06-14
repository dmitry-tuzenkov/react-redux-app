export const SCANNER_SCAN_ORDER_BARCODE = 'SCANNER_SCAN_ORDER_BARCODE'

export function scanOrderBarcodeAction (payload) {
  return {
    type : SCANNER_SCAN_ORDER_BARCODE,
    payload
  }
}

export const actions = {
  scanOrderBarcodeAction
}

const ACTION_HANDLERS = {
  [SCANNER_SCAN_ORDER_BARCODE] : (state, action) => Number(action.payload)
}

export default function reducer (state = 0, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
