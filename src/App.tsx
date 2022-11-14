import React from 'react';

import Layout from './components/canvas/Layout/Layout';
import Main from './components/canvas/Main/Main';
import Counter from './components/dom/Counter/Counter'
import {useAppSelector} from './hooks/app'

import './App.css';

const App: React.FC = ({children}) => {
  const {enableAmbientLight, enableCube, enableFloorHelpers} = useAppSelector((state) => state.canvas);

  return (
      <div>
        <Layout>
          <Main enableAmbientLight={enableAmbientLight} enableCube={enableCube}
                enableFloorHelpers={enableFloorHelpers}/>
        </Layout>

          <div style={{ position: 'relative' }}>
              <Counter />
          </div>
      </div>
  );
}

export default App;
