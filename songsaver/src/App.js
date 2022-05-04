import React from 'react';
import './styles/App.css';
import { NavContainer } from './components/navbar/navbar';
import { InputContainer } from './components/inputs/song_input_container/inputContainer.jsx'
import { ListContainer } from './components/lists/list_container/listContainer';

function App() {
  return (
    <div className="App">
      <NavContainer />
      <InputContainer />
      <ListContainer />
    </div>
  );
}

export default App;
