import React, { useContext } from 'react';
import Routes from './Routes/Routes';
import { VersionContext } from './context/VersionContext';

const App = () => {
  const { version } = useContext(VersionContext);

  return (
      <div className="App">
        {version && 
          <Routes version={version}/>
        }
      </div>
  )
};

export default App;
