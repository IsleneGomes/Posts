import React from 'react';
import logotipo from '../unnamed.png';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar/Avatar';
import { Link } from 'react-router-dom';
import NewPost from './BtnPost';

const myStyles = makeStyles({
  appBar: {
    backgroundColor: '#676b6b',
  },
  grow: {
    flexGrow: 1,
    marginLeft: 8,
  },
  userSection: {
    display: 'flex',
    alignItems: 'center',
  },
});

export default function Header() {

  const classes = myStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
          <a href='/home'>
            <img src={ logotipo } alt='logotipo da Segware do Brasil' width='150px' />
          </a>
          <div className={classes.grow}>{`do Brasil`}</div>
          {/* <div className="">
            <input type='text'></input>
          </div> */}
          <div className={classes.userSection}>
            <NewPost />
            <Link to='/'>
              <Avatar alt='Avatar do usuário' src='' className={classes.bell}>
              </Avatar>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
  )
}
