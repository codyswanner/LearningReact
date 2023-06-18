import React, {Component} from 'react';
import message_icon from './message_icon.png'
import trash_icon from './trash_icon.png'

class Comment extends React.Component {

    deleteComment = () => {
        this.props.deleteComment(this.props.index);
    }

    render() {
        return (
            <table className="comment">
                <tbody>
                    <tr>
                        <td className="photo">
                            <img src={message_icon}/>
                        </td>
                        <td className="message">
                            {this.props.message}
                        </td>
                        <td className="delete" onClick={this.deleteComment}>
                            <img src={trash_icon}/>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Comment;
