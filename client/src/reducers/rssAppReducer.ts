import {Action} from 'redux/index';
import markAsRead from '../actions/markAsRead.ts';
import openItem from '../actions/openItem.ts';

export default ( state: any, action: any ) => {
    switch(action.type) {
        case 'ITEM_MARKREAD':
            return markAsRead(state, action);
        case 'ITEM_OPEN':
            return openItem(state, action);
        default:
            return state;
    }

}
