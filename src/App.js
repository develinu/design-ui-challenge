import { Route } from 'react-router-dom'
// import { CSSTransition } from 'react-transition-group'
// import { useState } from 'react';

import './App.scss';

import Header from './components/Header'
import Headline from './components/Headline';
import CardList from './components/CardList';
import Footer from './components/Footer';
import ImageView from './components/ImageView'


function App() {
  
  // const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Route path="/">
          <Headline />
          <CardList />
        </Route>
        {/* <CSSTransition in={isOpen} className="image-popup" timeout={500}> */}
          <Route path="/image/:id" render={ ({match, history}) => {
            return (
              <ImageView 
                match={match} 
                history={history} />
                // setIsOpen={setIsOpen} />
            )
          }} />
        {/* </CSSTransition> */}
      </div>
      <Footer />
    </div>
  );
}

export default App;
