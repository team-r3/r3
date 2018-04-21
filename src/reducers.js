import { combineReducers } from 'redux'

// Import reducers from all screens
import map from './screens/Map/MapReducer'
import community from './screens/Community/CommunityReducer'
import information from './screens/Information/InformationReducer'

// Combine all reducers into a single root reducer
export default combineReducers({
  map,
  community,
  information
})
