import React, { useCallback, useContext,  } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import Header from '../Home/components/Header';
import { useDropzone } from 'react-dropzone';
import ContextUpvote from '../../context/ContextUpvote';
import Moment from 'react-moment';
import BottonBar from './BottonBar';

const myStyles = makeStyles({
  root: {
    display: 'flex',
    background: '#cfcece',
    height: '100%',
    overflow: 'scroll',
  },
  header: {
    flexDirection: 'column',
  },
  all: {
    margin: '10% 10%',
    padding: '5% 5%',
    background: 'white',
    width: '100%',
    height: '70%',
    boxShadow: '3px 2px 2px 1px #676b6b',
  },
  image: {
    width: '40%',
    height: '40%',
  },
  imagePreview: {
    width: '20%',
    height:'20%'
  },
  textarea: {
    width: '100%',
    height: '50%',
    resize: 'none',
    border: 'none',
    outline: 'none',
    fontSize: 15
  },
});


export default function New() {
  const classes = myStyles();

  const {
    user,
    image,
    title,
    setImage,
    setTitle,
    content,
    setContent,
  } = useContext(ContextUpvote);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
    const base64data = reader.result;
    setImage(base64data)
    }
  }, [setImage]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
    accept: 'image/*',
  });

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value)
  };

  const handleMarkDownChange = (event) => {
    setContent(event.currentTarget.value)
  };

  const dateToFormat = new Date();

  return (
    <>
    <Header />
      <Box className={classes.root}>
        <Box className={classes.all}>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <Button>Carregar Imagem</Button>
            </div>
            { image && <img className={classes.image} src={image} alt='background do post' />}
            <TextField
              id='title'
              placeholder='Título'
              fullWidth
              value={title}
              onChange={handleTitleChange}
            />
          <textarea value={content} className={classes.textarea} onChange={handleMarkDownChange} />
        </Box>
        <Box className={classes.all}>
          { image && <img className={classes.imagePreview} src={image} alt='background do post' />}
            <Typography>{title}</Typography>
            <Box>
              <Box>
                <Typography>{`Postado por: ${user} `}</Typography>
                <Typography>
                  <Moment>{ dateToFormat }</Moment>
                </Typography>
              </Box>
            </Box>
          <Typography>{content}</Typography>
        </Box>
      </Box>
      <BottonBar />
    </>
  );
}
