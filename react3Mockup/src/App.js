import React, {Component} from 'react';
import './App.css';
import MainContent from './MainContent'
import Header from './Header'


class App extends Component {
  render(){
    return (
    <div className="App">
      <Header />
      <MainContent />
    </div>
    );
  }
}

export default App;
