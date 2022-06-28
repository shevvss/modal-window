import React, { useState } from 'react';
import './App.scss';
import Modal from './Components/Modal';

function App() {
  const [modal, setModal] = useState(false);

  const Toggle = () => setModal(!modal);

  return (
    <div className='App'>
      <button onClick={() => Toggle()}>Modal</button>

      <Modal show={modal} close={Toggle} title='Dynamic title'>
        This is modal dynamic content
      </Modal>
    </div>
  );
}

export default App;
