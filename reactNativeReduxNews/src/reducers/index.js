import { combineReducers } from 'redux'
// import and declare data todolist to state
import dataPeople from './reducer_data_peoples'
//

const rootReducers = combineReducers({
  peoples: dataPeople
})

export default rootReducers
