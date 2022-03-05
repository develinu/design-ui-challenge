import { Route } from 'react-router-dom'

import './App.css';

import Header from './components/Header'
import Headline from './components/Headline';
import CardList from './components/CardList';


function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route exact path="/">
          <Headline />
          <CardList />
        </Route>
      </div>
    </div>
  );
}

export default App;
