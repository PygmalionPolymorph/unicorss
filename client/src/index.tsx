import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as jQuery from 'jquery';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import mapRss from './utils/mapRss';
import rssAppReducer from './reducers/rssAppReducer';
import FeedList from './components/FeedList';

jQuery.ajax({
    type: 'GET',
    url: 'http://localhost:5000',
    dataType: 'jsonp'
}).done(function( res ) {

    const storeItems = mapRss(res);

    const store = createStore(rssAppReducer, {
        feedItems: storeItems
    });

    ReactDOM.render(
        <Provider store={store}>
            <FeedList />
        </Provider>,
        document.getElementById('app')
    );

}).fail(function(j, status) {
    console.log(j);
});
