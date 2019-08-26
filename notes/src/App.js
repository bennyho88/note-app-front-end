import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

// Create
import Create from './Create';
// Delete
import Delete from './Delete';


class App extends Component {
  constructor() {
    super()
    this.state = {
      character: {}
    }
  }

  componentDidMount() {
    fetch("http://localhost/becode-database-api/select.php")
      .then(response => response.json())
      .then(data => {
        this.setState({
          character: data
        })
  })
}


  render() {
    return (
      <div className="App">
        <div className="create">
          <Create />
        </div>
        <div>
        {this.state.character.title}
        </div>
      </div>
    );
  }
}

export default App;
