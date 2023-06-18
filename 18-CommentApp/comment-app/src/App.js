import React from 'react';
import CommentList from './CommentList';
import CommentBox from './CommentBox';

class App extends React.Component {
  state = {
    messages: [
      'I see a little silhouetto of a man',
      'Scaramouch, Scaramouch, will you do the Fandango',
      'Thunderbolts and lightening, very very frightening me',
      'Galileo, Galileo',
      'Galileo, Galileo',
      'Galileo, Figaro'
    ]
  }

  addComment = (message) => {
    this.setState(function(prevState) {
      var messages = prevState.messages.concat();
      messages.push(message);
      return{
        messages: messages
      }
    });
  }

  deleteComment = (index) => {
    this.setState(function(prevState) {
      var messages = prevState.messages.concat();
      messages.splice(index, 1);
      return{
        messages: messages
      }
    });
  }
  
  render() {
    return (
      <div>
        <CommentBox addComment={this.addComment}/>
        <CommentList messages={this.state.messages} deleteComment={this.deleteComment}/>
      </div>
    );
  }
}

export default App;
