import React, {Component} from 'react';
import Comment from './Comment';

class CommentList extends React.Component {

    render() {
        var index = 0;
        return (
            <div className="comment-list">
                {this.props.messages.map(
                    (message) => 
                        <Comment index={index} key={index++} message={message} {...this.props}/>
                )}
            </div>
        );
    }
}

export default CommentList;
