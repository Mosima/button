import {combineReducers} from 'redux'

import buttonReducer from './button/reducer'

 const appReducer = combineReducers({
    buttonReducer
})

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer