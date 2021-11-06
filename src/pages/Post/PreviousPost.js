import React from 'react';
import Proptypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardActions, IconButton, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

export default function PreviousPost({ post }) {

  const myStyles = makeStyles({
   root: {
    marginBottom: 16,
    width: '600px',
    height: '100%',
  },
  subheader: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 16,
  },
  caption: {
    marginRight: 8,
    marginLeft: 8,
  },
  card: {
    margin: '0 1%',
    padding: 16,
  },
  post: {
    marginRight: 8,
    marginLeft: 23,
  },
  avatar: {
    marginRight: 32,
  },
    imagePreview: {
    width: '10%',
    height:'10%',
    padding: '5% 0',
  },
  });

  const classes = myStyles();

  return (
    <Card className={classes.root}>
    <div className={classes.subheader}>
      { post.image
        &&
        <img
          className={classes.imagePreview}
          src={post.image}
          alt='background do post'
        />}
        <div className={classes.card}>
          <Typography variant='h6'>{post.title}</Typography>
        </div>
    </div>
      <div>
        <div className={classes.subheader}>
          <Typography variant='caption' className={classes.caption}>
            {'Postado por'}
          </Typography>
          <Typography variant='subtitle2' className={classes.caption}>
            {post.user}
          </Typography>
          <Typography variant='caption' className={classes.caption}>{ post.date }</Typography>
        </div>
        <div className={classes.post}>
          <Typography variant='subtitle2' className={classes.description}>
            {post.content}
          </Typography>
        </div> 
        
      </div>
      <CardActions>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
        <Typography 
          style={{cursor: 'pointer'}}
          color='textSecondary'
          variant='body2'
        >
        </Typography>
      </CardActions>
    </Card>
  )
};

PreviousPost.propTypes = ({
  post: Proptypes.arrayOf(),
}).isRequired;