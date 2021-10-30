import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';

function App() {
  const [ showModal, setShowModal ] = useState(false);

  const openModal = () => {
    setShowModal(prev => !prev)
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home openModal={openModal} setShowModal={setShowModal} />
            <Create showModal={showModal} openModal={openModal} />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>

  );
}

export default App;
