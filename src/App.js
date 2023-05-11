import { useEffect, useState } from 'react';
import './App.css';
import Home from './views/home';
import SplasScreen from './views/splashScreen';


function App() {
  const [screen, setScreen] = useState(<Home />)
  const estaNoMobile = false;

  useEffect(() => {
    if (estaNoMobile) {
      setScreen(<Home />)
    } else {
      setScreen(<SplasScreen />)
      setTimeout(() => {
        setScreen(<Home />)
      }, 2000)
    }
  }, []);

  return (
    <div className="App">
      <Home />
      {/* {screen} */}
      </div>
  );
}

export default App;