import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Room from './pages/room';
import About from './pages/about';
import Contact from './pages/contact';
import Bookroom from './pages/roomdetail';
import Login from './pages/login';
import Register from './pages/register';
import CheckAvailabilityForm from './pages/checkavail';
import RoomDetailsPage from './pages/roomdetail';
import Book from './pages/book';
import UserProfile from './pages/userprofile';
import UpdateForm from './pages/update';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/room" element={<Room />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/check" element={<CheckAvailabilityForm />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/roomdetail" element={<RoomDetailsPage/>} />
    <Route path="/book" element={< Book/>} />
    <Route path="/user" element={< UserProfile/>} />
    <Route path="/update" element={< UpdateForm/>} />


  </Routes>
);

export default AppRoutes;
