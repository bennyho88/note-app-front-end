import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// Create
import Create from './Create';



class App extends Component {
  constructor() {
    super();
    this.state = {
        Items: [],
        currentItem: {text:'', key: ''}
    }
  }
  handleInput = e => {
    const itemText = e.target.vallue
    const currentItem = { text: itemText, key: Date.now()}
    this.setState({
      currentItem,
    })
  }
  addItem = e => {
    e.preventDefault()
    const newItem = this.state.currentItem
    if (newItem.text !== '') {
      console.log(newItem)
      const items = [...this.state.items, newItem]
      this.setState({
        items: items,
        currentItem: { text: '', key: '' },
      })
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

/*
<div>
        {this.state.character.title}
        </div>
        */
  render() {
    return (
      <div className="App">
        <div className="create">
          <Create addItem={this.addItem} 
          inputElement={this.inputElement}
          handleInput = {this.handleInput}
          currentItem = {this.state.currentItem}/>
        </div>
      </div>
    );
  }
}

export default App;
