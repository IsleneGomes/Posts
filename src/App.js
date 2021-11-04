import React from 'react';
import ProviderUpvote from './context/ProviderUpvote'
// import Login from './pages/Login/index';

import './mock';
import AllRotes from './routes/AllRotes';

function App() { 
  return (
    <ProviderUpvote>
      <AllRotes />
    </ProviderUpvote>
  )
}

export default App;
