import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  // constructor(props) { // nao preciso do constructor, posso eliminar ele tambem
    // super(props);
    // this.handlePCLick = this.handlePCLick.bind(this) // desnecessário, ultrapassado // arrow function resolve
    // this.state = {tksmckmsk}
      state = {
      name: 'Ramon Coelho',
      counter: 0
    };

  handlePCLick = () => {
    this.setState({name: "sonatA #chery"});
  }
  
  handleAClick = (event) => {
    event.preventDefault();
    const {counter} = this.state;
    this.setState({counter: counter + 1});
  }

  render() {
    const {name, counter} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p onClick={this.handlePCLick}>
            {name} {counter}
          </p>
          <a
            onClick={this.handleAClick}
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contador
          </a> 
        </header>
      </div>
    ); // single page application
  }
}


export default App;
