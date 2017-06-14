import { endpointApiUrl, defaultHeaders } from '../../../api'
import { querystring } from '../../../utils'

export function fetchOrdersByQuery (query) {
  const options = { headers: defaultHeaders() }
  const url = endpointApiUrl(querystring('/orders', query))

  return fetch(url, options)
    .then(response => response.json())
}
