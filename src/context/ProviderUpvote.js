import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './ContextUpvote';

export default function ProviderUpvote({ children }) {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null)
  const [posts, setPost] = useState([])

  // useEffect(() => {
  //   const getAPI = async () => {
  //     const endpoint = 'http://segware-book-api.segware.io/api/sign-in';
  //     const result = await fetch(endpoint)
  //     const data = await result.json();
  //     console.log(data)
  //     setUser(data);
  //   };
  //   getAPI();
  // })

   const context = {
    user,
    setUser,
    password,
    setPassword,
    content,
    setContent,
    title,
    setTitle,
    posts,
    setPost,
    image,
    setImage,
    date,
    setDate,
  };

  return (
    <Context.Provider value={ context }>
      { children }
    </Context.Provider>
  )
}

ProviderUpvote.propTypes = ({
  children: PropTypes.node,
}).isRequired;