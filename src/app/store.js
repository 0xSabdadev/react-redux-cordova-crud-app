import {createStore} from '@reduxjs/toolkit'

const initialState = {
    room: 0,
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'plus':
            return {
                ...state,
                room: state.room + action.sum,
            }
        case 'reset':
            return {
                ...state,
                room: state.room * 0,
            }
        default:
            return state
    }
}
export const store = createStore(reducer)
