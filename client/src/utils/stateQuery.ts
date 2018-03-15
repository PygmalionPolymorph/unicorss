
export const findFeedItemById = (state: any, id: number) => {
    return state.feedItems.filter((item:any)=>item.id == id)[0];
}

export const allFeedItemsBut = (state: any, id: number) => {
    return state.feedItems.filter((x:any)=>x.id!=id);
}

