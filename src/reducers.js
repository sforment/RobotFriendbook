import { CHANGE_SEARCHFIELD } from './constants.js'

const intialState = {
    searchfield: ''
}

export const searchRobots = (state=intialState, action={}) => {
    switch(action.type) {
        case CHANGE_SEARCHFIELD:
            return Object.assign({}, state, {searchfield: action.payload});
        default: 
            return state;
    }
}