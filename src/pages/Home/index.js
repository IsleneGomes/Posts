import React, { useContext } from 'react';
import Header from './components/Header/index';
import { makeStyles } from '@material-ui/styles';
import PreviousPost from '../Post/PreviousPost';
import ContextUpvote from '../../context/ContextUpvote';
import FirstPage from './components/FirstPage/index';

const myStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyItems: 'center',
    alignItems: 'center',
    background: '#cfcece',
    height: '100vh'
  },
  main: {
    height: 'auto',
    padding: 24,
  },
  toolbar: {
    minHeight: 64,

  }
})

function Home() {
const { posts } = useContext(ContextUpvote);

  const classes = myStyles();
  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
        <main className={classes.main}>
          { posts.length === 0 ? <FirstPage /> : posts.map(post => <PreviousPost key={ post.title } post={ post } /> )}
        </main>
    </div>
  )
}

export default Home;
