import React from 'react'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import NewMexicoHunts from './components/NewMexicoHunts'
import TexasHunts from './components/TexasHunts'
import Rates from './components/Rates'
import HuntsContainer from './containers/HuntsContainer';

function App() {
  return (
  <Router>
    <div className="App" >
      <header className="App-header">
      <h1>American Outfitters</h1>
        <HuntsContainer />
        <Navbar />
          <Route exact path='/' component={Home} />
          <Route exact path='/NewMexicoHunts' component={NewMexicoHunts}/>
          <Route exact path='/TexasHunts' component={TexasHunts}/>
          <Route exact path='/Rates' component={Rates} />
       
      </header>
    </div>
  </Router>
  );
}

export default App;
