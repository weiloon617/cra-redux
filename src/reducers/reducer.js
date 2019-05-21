import { combineReducers } from 'redux'
import simpleReducer from './simple'

export default combineReducers({
  simple: simpleReducer,
})
