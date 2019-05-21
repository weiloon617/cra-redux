import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// Reducer
import rootReducer from './reducers/reducer'

export default function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk))
}
