import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItem from '../sidebaritem/sidebaritem';


function Sidebar (props) {

  const [state, setState] = useState({
    addingNote: false,
    title: null
  });
  
  const { notes, classes, selectedNoteIndex} = props

  const newNoteBtnClick = () => {
    console.log('new btn clicked');
    setState({ addingNote : !state.addingNote, title: null })
  }

  const updateTitle = (text) => {
    console.log(text);
  }

  return (
    <div className={classes.SidebarContainer}>
      <Button 
        onClick={newNoteBtnClick}
        className={classes.newNoteBtn}>{state.addingNote ? 'Cancel' : 'New Note'}</Button>
        {
          state.addingNote ?
          <div>
            <input 
              type='text' 
              className={classes.newNoteInput} 
              placeholder="Enter note title"
              onKeyUp={e => updateTitle(e.target.value)}>
            </input>
          </div> :
          null
        }
    </div>
  )
}

export default withStyles(styles)(Sidebar);