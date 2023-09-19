import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import DashSidebar from './Components/DashSidebar';
import {Login} from './Components/Login';
import {Register} from './Components/Registe';
import { useGlobalContext } from './Data/globalContext';
import { LandingPage } from './Components/LandingPage';
import ProtectedRoute from './Components/ProtectedRoute';

function App() { 
  
  return (
    <div>    
    <BrowserRouter>
        <Routes>          
          <Route path="/Login" element={ <Login/> } />
          <Route path="/Register" element={ <Register/> } />
          <Route path="/Landing" element={ <LandingPage/> } />
          <Route path="/Dashboard" element={
            <ProtectedRoute>
              <DashSidebar/>
            </ProtectedRoute>
        }/>
        </Routes>      
    </BrowserRouter>
    </div>
  );
}

export default App;
