import {
  combineReducers
} from 'redux'
import {
  EXAM1,
  EXAM2,
} from '../action/index'

function exam_reducer(state = {}, action) {
  switch (action.type) {
    case EXAM1:
      return action.exam1
    case EXAM2:
      return action.exam2
    default:
      return state
  }
}

const rootReducer = combineReducers({
  exam_reducer,
})
export default rootReducer