import './stylesheets/App.css';
import Greet from './components/Greet'
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route exact path='/' element={<Greet />} />
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/signup' element={<Signup />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
