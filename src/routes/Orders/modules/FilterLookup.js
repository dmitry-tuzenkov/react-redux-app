export default function lookup (prefix, api) {
  const ACTION_HANDLERS = {}
  ACTION_HANDLERS[prefix + '_REQUEST'] = (state, action) => state
  ACTION_HANDLERS[prefix + '_SUCCCESS'] = (state, action) => action.payload
  ACTION_HANDLERS[prefix + '_FAILED'] = (state, action) => action.error

  const reducer = (state = [], action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
  }

  const action = () => (dispatch, getState) => {
    dispatch({ type: (prefix + '_REQUEST') })
    return api()
      .then(json => dispatch({ type: (prefix + '_SUCCCESS'), payload: json }))
      .catch(cause => dispatch({ type: (prefix + '_FAILED'), error: cause }))
  }

  return { reducer, action }
}
