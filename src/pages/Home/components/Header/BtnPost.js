import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import ContextUpvote from '../../../../context/ContextUpvote';

const myStyles = makeStyles({
  button: {
    marginRight: 10,
    marginLeft: 10,
    backgroundColor: '#3b3d3d',
    padding: 1,
  },
});

export default function BtnPost() {
  const classes = myStyles();
  const history = useHistory();
  const { setTitle, setContent, setImage} = useContext(ContextUpvote);

const handleclick = async () => {
  try {
    history.push('/home/new');
    setTitle('');
    setContent('');
    setImage('');
  } catch (error) {
    console.log('Erro no servidor');
  }
}
  return (
    <Button
      color='primary'
      variant='contained'
      className={classes.button}
      onClick={handleclick}
    >
      Novo Post
    </Button>
  )
}
