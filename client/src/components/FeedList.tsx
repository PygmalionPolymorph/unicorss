import {Store} from 'redux/index';
import {connect} from 'react-redux'
import FeedItem from './FeedItem';
import { IFeedItem } from './FeedItem';
import * as React from "react";

class FeedList extends React.Component<any, any> {
    render() {
        const { feedItems } = this.props;
        return (
            <div>
                <h1>UnicoRSS</h1>
                <ul>
                    {feedItems.sort((a:IFeedItem ,b:IFeedItem)=>b.date.getTime()-a.date.getTime()).map((item: any) => {
                        const {title, text} = item;
                        return <li key={item.id}>
                            <FeedItem {...item} />
                        </li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => ({
    feedItems: state.feedItems
});

const mapDispatchToProps = (dispatch: any) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);
