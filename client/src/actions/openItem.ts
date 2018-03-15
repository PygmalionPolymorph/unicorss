import {Action} from 'redux/index';
import {findFeedItemById, allFeedItemsBut} from '../utils/stateQuery.ts';

export interface openItemAction extends Action {
    type: string,
    id: number
}

export default (state: any, action: any) => {
    const item = findFeedItemById(state, action.id);
    item.open = true;
    return Object.assign({}, state, {
        feedItems: [...allFeedItemsBut(state, item.id), item]
    });
}

