import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

/*
 * Create redux store
 */
export default function configureStore (initialState = {}) {
  // Setup middleware and enhancers
  const enhancers = [
    applyMiddleware(thunk)
  ]

  const store = createStore(rootReducer, initialState, compose(...enhancers))
  return store
}
