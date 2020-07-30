import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './sidebar/sidebar';
import Editor from './editor/editor';

const firebase = require('firebase');

function App() {
  const [state, setState] = useState({
    selectedNoteIndex: null,
    selectedNote: null,
    notes: null
  })

  useEffect(() => {
    firebase 
      .firestore()
      .collection('notes')
      //snapshot gets called everytime collection is called
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        })
        console.log(notes);
        setState({ notes: notes });
      });
  }, [])

  return (
    <div className="app-container">
      <Sidebar 
        selectedNoteIndex={state.selectedNoteIndex}
        notes={state.notes}
      />
      <Editor />
    </div>
  );
}

export default App;
