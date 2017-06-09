import { endpointApiUrl, defaultHeaders } from '../../../api'
import { querystring } from '../../../utils'

export function fetchOrdersByQuery (query) {
  const options = { headers: defaultHeaders() }
  const url = endpointApiUrl(querystring('/orders', query))

  return fetch(url, options)
    .then(response => response.json())
}

export function updateOrderDataById (id, data) {
  const options = {
    method: 'PUT',
    headers: defaultHeaders()
  }
  options.headers.append('x-crsf-token', 'tokenvalue')

  return fetch(endpointApiUrl('/orders/' + id), options)
    .then(response => response.json())
}

export function fetchOrderById (id) {
  const options = { headers: defaultHeaders() }

  return fetch(endpointApiUrl('/orders/' + id), options)
    .then(response => response.json())
}

// TODO: Do we need this
// export function fetchOrderByBarcode (barcode) {
//   const options = { headers: defaultHeaders() }
//
//   return fetch(endpointApiUrl('/orders/barcode/' + barcode), options)
//     .then(response => response.json())
// }

export function fetchOrderShipmentTypes () {
  const options = { headers: defaultHeaders() }

  return fetch(endpointApiUrl('/shipment-types/'), options)
    .then(response => response.json())
}

export function fetchOrderPackTypes () {
  const options = { headers: defaultHeaders() }

  return fetch(endpointApiUrl('/pack-types/'), options)
    .then(response => response.json())
}

export function fetchOrderOfferTypes () {
  const options = { headers: defaultHeaders() }

  return fetch(endpointApiUrl('/offer-types/'), options)
    .then(response => response.json())
}

export function fetchOrderAmountTypes () {
  return Promise.resolve([ 1, 3, 5, 7, 9 ])
}
