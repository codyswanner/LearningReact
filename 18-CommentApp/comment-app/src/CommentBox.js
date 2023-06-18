import React, {Component} from 'react';

class CommentBox extends React.Component {
    constructor(props) {
        super(props);

        // because this is a simple componenet, it will be uncontrolled
        // best practices reccomend controlled components in most circumstances
        this.messageInputRef = React.createRef();
    }

    addComment = () => {
        this.props.addComment(this.messageInputRef.current.value);
        this.messageInputRef.current.value = '';
    }
    
    render() {
        return (
            <div className="commentbox">
                <input className="input" ref={this.messageInputRef}/>
                <button className="button" onClick={this.addComment}>
                    Post
                </button>
            </div>
        );
    }
}

export default CommentBox;
