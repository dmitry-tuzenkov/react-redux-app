import { connect } from 'react-redux'
import { filterByOfferTypeAction } from '../modules/OfferFilter'
import offerFilter from '../components/OfferFilter'

const mapDispatchToProps = (dispatch) => ({
  onChange: (id) => dispatch(filterByOfferTypeAction(id))
})

const mapStateToProps = (state) => ({
  offerTypes: state.orderOfferTypes,
  offerType: state.ordersQueryOfferType,
})

export default connect(mapStateToProps, mapDispatchToProps)(offerFilter)
