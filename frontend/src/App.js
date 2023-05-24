// import logo from './logo.svg';
// import './App.css';
import Signup from './pages/signup';
import Loginform from './pages/login';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/signup' element={<Signup/>} />
      <Route path='/loginform' element={<Loginform/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
