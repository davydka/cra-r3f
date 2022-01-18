import React from 'react';

import Layout from './components/canvas/Layout/Layout';
import Main from './components/canvas/Main/Main';

import './App.css';

const App: React.FC = ({children}) => {
  return (
    <Layout>
      <Main />
    </Layout>
  );
}

export default App;
