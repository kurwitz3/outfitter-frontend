import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import HuntsContainer from './containers/HuntsContainer';
import ReviewsContainer from './containers/ReviewsContainer'

function App() {
  return (
  <Router>
    <div className="App" >
      <header className="App-header">
        <Navbar />
          <Switch>
             <Route exact path='/' component={Home} />
             <Route path='/NewMexicoHunts' component={HuntsContainer}/>
             <Route path='/TexasHunts' component={HuntsContainer}/>
             <Route path='/Rates' component={HuntsContainer} />
             <Route path='/Reviews' component={ReviewsContainer} />
          </Switch>
      </header>
    </div>
  </Router>
  );
}

export default App;
