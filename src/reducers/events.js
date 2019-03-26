import _ from 'lodash';
import {
    CREATE_EVENT,
    READ_EVENTS,
    DELETE_EVENT,
    READ_EVENT,
    UPDATE_EVENT
} from '../actions';

export default (events = {}, action) => {
    switch (action.type) {
        case READ_EVENTS:
        case CREATE_EVENT:
            return _.mapKeys(action.response.data, 'id');
        case DELETE_EVENT:
            //eventsというオブジェクトの要素を削除する
            delete events[action.id];
            return {...events};
        case READ_EVENT:
            const data = action.response.data;
            return {...events, [data.id]: data};
        case UPDATE_EVENT:
            return _.mapKeys(action.response.data, 'id');
        default:
            return events;
    }
}