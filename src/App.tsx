import React from 'react';

import Layout from './components/canvas/Layout/Layout';
import Main from './components/canvas/Main/Main';
import Controls from './components/dom/Controls/Controls'
import {useAppSelector} from './hooks/app'

import './App.css';

const App: React.FC = ({children}) => {
  const {enableAmbientLight, enableCube, enableFloorHelpers} = useAppSelector((state) => state.canvas);
  const {isPlaying} = useAppSelector((state) => state.controls)

  return (
      <div style={{
        backgroundColor: "black",

      }}>
        <Layout>
          <Main enableAmbientLight={enableAmbientLight} enableCube={enableCube}
                enableFloorHelpers={enableFloorHelpers} isPlaying={isPlaying}/>
        </Layout>

          <div style={{ position: 'relative' }}>
              <Controls />
          </div>
      </div>
  );
}

export default App;
