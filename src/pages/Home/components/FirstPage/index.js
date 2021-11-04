import React, { useContext } from 'react';
import ContextUpvote from '../../../../context/ContextUpvote';
import Figure from './logo.png';
import { makeStyles } from '@material-ui/styles';

const myStyles = makeStyles({
  appBar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
  },
  image: {
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyItems: 'center',
  },
});

export default function FirstPage() {
  const classes = myStyles();
  const { user } = useContext(ContextUpvote);

  return (
    <div className={classes.appBar}>
      <div>
        <h1>{`Olá obrigada por estar aqui ${user}`}</h1>
      </div>
      <div className={classes.image}>
        <img src={Figure} alt={'Saudações de bem vindos (as) a página'} width='50%' />
        <h2>Aqui você pode criar seus post e acessar os posts do State</h2>
      </div>
    </div>
  )
}