import React, {Component} from 'react';
import book from './books.jpg';
import Table from './Table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={book} className="App-logo" alt="logo" width="500px" />
          <Table/>
        </div>
      </div>
    );
  }
}

export default App;
