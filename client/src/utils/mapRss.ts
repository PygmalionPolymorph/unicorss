export default ( rssItems: Array<any> ) => {
    console.log(rssItems);
    let id = 0;
    return rssItems.map((item)=> {
        id++;
        return Object.assign({}, {
            id: id,
            title: item.title,
            text: item.description,
            image: item.image,
            date: new Date(item.date),
            open: false,
            read: false
        });
    });
}
