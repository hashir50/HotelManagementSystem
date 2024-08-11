import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
