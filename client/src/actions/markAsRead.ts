import {Action} from 'redux/index';
import {findFeedItemById, allFeedItemsBut} from '../utils/stateQuery.ts';

export interface markAsReadAction extends Action {
    type: string,
    id: number
}

export default (state: any, action: markAsReadAction) => {
    const readItem = findFeedItemById(state, action.id);
    readItem.read = true;
    return Object.assign({}, state, {
        feedItems: [...allFeedItemsBut(state, readItem.id), readItem]
    });
}

