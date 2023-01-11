import './App.css';
import './firebase'
import React from 'react';
import FormEncuesta from './components/FormEncuesta';
import Encuestas from './components/Encuestas';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from './components/LandingPage/LandingPage';
function App() {
  return (
    <React.Fragment>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<FormEncuesta/>}/>
      <Route path='/encuestas' element={<Encuestas/>}/>
    </Routes>
    </BrowserRouter>
    <ToastContainer/>
    </React.Fragment> 
  );
}

export default App;
