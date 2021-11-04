import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Container } from '@material-ui/core';
import New from '../../../Post/New';

const myStyles = makeStyles({
  root: {
    width: '80%',
    padding: 24,
  }
});

export default function Feed() {

const classes = myStyles();
  return (
    <Container>
      <Box>
        <div className={classes.root}>
          <New />
        </div>
      </Box>
    </Container>
  )
}
