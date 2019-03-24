import {READ_EVENTS} from '../actions/index';

export default (state = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
            return state;
        default:
            return state;
    }
}