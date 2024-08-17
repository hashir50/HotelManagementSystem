import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Navbar from './components/navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import Home from './pages/home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Router>
      <div>
        <AppRoutes />
        {/* Toast Notifications */}
        <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
      </div>
    </Router>
  );
}

export default App;
