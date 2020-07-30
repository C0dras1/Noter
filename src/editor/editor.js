import React, { useState} from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

function Editor (props) {
  const [state, setState] = useState({
    text: '',
    title: '',
    id: ''
  })

  const { classes } = props

  const updateBody = async (val) => {
    await setState({ text: val });
    update();
  }

  const update = debounce(() => {
    console.log('updating database')
    //To Do
    
  }, 1500);


  return (
    <div className={classes.editorContainer}>
      <ReactQuill 
        value={state.text}
        onChange={updateBody}
      />
    </div>
  )
}


export default withStyles(styles)(Editor);