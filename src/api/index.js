const ROOT_API = 'http://localhost:3001'

export function endpointApiUrl (url) {
  return ROOT_API + url
}

export function createRequest () {
  return new Request()
}

export function defaultHeaders () {
  return new Headers({
    'Content-Type': 'application/json'
  })
}
