import * as types from './types'


export const updateVal = () =>{
    return (dispatch, getState) => {
        let val = getState().buttonReducer.buttonVal + 1
        dispatch({
                type: types.UPDATE_VAL,
                payload: val
        })
    }
}