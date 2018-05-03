import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { updateSearch, closeSearch } from './CommunityActions'
import MainToolbar from '../../components/MainToolbar'

// Map the relevant search state to the header component
const mapStateToSearchProps = (state) => {
  return {}
}

// Map the search actions to event handler props on the header component
const mapDispatchToSearchProps = (dispatch) => {
  return bindActionCreators({
    onChange: updateSearch,
    onClose: closeSearch
  }, dispatch)
}

// Merge state and dispatch props into the final props, according to the
// structure expected by MainToolbar.
const mergeProps = (stateProps, dispatchProps, ownProps) => {
  return {
    ...ownProps,
    search: {
      ...ownProps.search,
      ...stateProps,
      ...dispatchProps
    }
  }
}

// Export HOC version of MainToolbar with state an actions already configured
export default connect(
  mapStateToSearchProps,
  mapDispatchToSearchProps,
  mergeProps
)(MainToolbar)
