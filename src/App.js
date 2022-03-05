import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
// import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  // onSearchChange = (event) => {
  //   const searchField = event.target.value.toLocaleLowerCase();
  //   this.setState(() => {
  //     return { searchField };
  //   })
  // }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json()) 
      .then(users => this.setState({monsters: users}))
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter( monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()))

    return (
      <div className="App">
      <input type='search' placeholder='Monsters' onChange={e => this.setState({ searchField: e.target.value})}/>
        <CardList monsters={this.state.monsters} /> 
      </div>
    );
  }
}

export default App;