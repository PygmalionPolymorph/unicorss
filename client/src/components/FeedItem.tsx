import * as React from 'react';
import {connect} from 'react-redux'

export interface IFeedItem {
    id: number,
    title: string,
    read: boolean,
    open: boolean,
    text?: string,
    image?: string,
    date: any
}

class FeedItem extends React.Component<any, any> {
    openItem() {
        this.props.openItem(this.props.id);
        this.props.markAsRead(this.props.id);
    }
    renderItemBody(text: string) {
        return {
            __html: text
        }
    }
    render() {
        const {title, text, read, open} = this.props;
        const headlineClass = read ? "c-feeditem--read__headline" : '';
        const paragraphClass = open ? "u-dblock" : "u-dnone";
        return (
            <div className="c-feeditem">
                <h2 className={headlineClass} onClick={(e)=>this.openItem()}>{ title }</h2>
                <div className={paragraphClass} dangerouslySetInnerHTML={this.renderItemBody(text)} />
            </div>
        )
    }
}

const mapStateToProps = (state: any) => ({
});

const mapDispatchToProps = (dispatch: any) => ({
    markAsRead: (id: number) => {
        dispatch({
            type: 'ITEM_MARKREAD',
            id
        });
    },
    openItem: (id: number) => {
        dispatch({
            type: 'ITEM_OPEN',
            id
        })
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedItem);
