import { connect } from 'react-redux'
// import { fetchAllAction } from '../modules/Orders'
import FilterComponent from '../components/FilterComponent'

const mapDispatchToProps = (dispatch) => ({
  fetchByQuery: () => alert('::fetchByQuery(dispatch())')
})

const mapStateToProps = (state) => ({
  query : state.ordersQuery,
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent)
