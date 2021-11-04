import { AppBar, Button, Toolbar } from '@material-ui/core'
import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/styles';
import { useHistory } from 'react-router-dom';
import ContextUpvote from '../../context/ContextUpvote';

const myStyles = makeStyles({
  appBar: {
    top: 'auto',
    bottom: 0,
    alignItems: 'center',
    justifyItems: 'center',
  },
  button: {
    marginRight: 16,
    color: 'secundary',
    variant: 'outlined',
  },
  toolbar: {
    display: 'flex', 
  },
});

export default function BottonBar() {
  const classes = myStyles();
  const {
    user,
    title,
    date,
    content,
    image,
    posts,
    setPost,
  } = useContext(ContextUpvote);

  const history = useHistory();

  const handlePublish = () => {
    setPost([
      ...posts,
      {
        user: user,
        date: date,
        title: title,
        content: content,
        image: image,
      }]);
      console.log(posts)
    history.push('/home');
  };

  return (
    <AppBar
        position='fixed'
        color='inherit'
        className={classes.appBar}
      >
        <Toolbar className={classes.toolbar}>
          <Button
          onClick={handlePublish}
          >
            Publicar
          </Button>
        </Toolbar>
      </AppBar>
  )
}
