import * as types from './types'
import * as props from './props'

export default (state = props, action) => {
    switch (action.type){
        case types.UPDATE_VAL:
            return{
                ...state,
                buttonVal: action.payload
            }
        default:
            return{
                ...state
            }
    }
}