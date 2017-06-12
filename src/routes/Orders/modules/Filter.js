export default function filter (prefix, initialState = null) {
  const ACTION_HANDLERS = {}
  ACTION_HANDLERS[prefix + '_FILTER'] = (state, action) => state

  const reducer = (state = initialState, action) => {
    const handler = ACTION_HANDLERS[action.type]
    return handler ? handler(state, action) : state
  }

  return { reducer }
}
