import React from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
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
     
        
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route  path='/NewMexicoHunts' component={HuntsContainer}/>
          <Route  path='/TexasHunts' component={HuntsContainer}/>
          <Route  path='/Rates' component={HuntsContainer} />
        </Switch>
      </header>
    </div>
  </Router>
  );
}

export default App;
