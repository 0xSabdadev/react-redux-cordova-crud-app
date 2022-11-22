import {createStore} from '@reduxjs/toolkit'

const initialState = {
    room: 0,
    css: {color: '#696CFF', fontWeight: 'bold'},
    isActive: null,
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
        case 'home':
            return {
                ...state,
                isActive: 1,
            }
        case 'add':
            return {
                ...state,
                isActive: 2,
            }
        case 'team':
            return {
                ...state,
                isActive: 3,
            }
        default:
            return state
    }
}
export const store = createStore(reducer)
