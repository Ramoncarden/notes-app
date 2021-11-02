import { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Create from './Create';
import NoteDetails from './NoteDetails';
import NotFound from './NotFound';

function App() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <BrowserRouter>
      <div className='App'>
        <Switch>
          <Route exact path='/notes-app'>
            <Home openModal={openModal} setShowModal={setShowModal} />
            <Create showModal={showModal} openModal={openModal} />
          </Route>
          <Route path='/notes-app/notes/:id'>
            <NoteDetails />
          </Route>
          <Route path='/notes-app/*'>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
