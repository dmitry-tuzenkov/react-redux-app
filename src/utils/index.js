export function querystring (path, params) {
  if (!params || !Object.keys(params).length) {
    return path
  }

  const query = Object
    .keys(params)
    .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(params[k]))
    .join('&')

  return path + '?' + query
}
