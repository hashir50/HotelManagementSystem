import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Room from './pages/room';
import About from './pages/about';
import Contact from './pages/contact';
import Login from './pages/login';
import Register from './pages/register';
import CheckAvailabilityForm from './pages/checkavail';
import RoomDetailsPage from './pages/roomdetail';
import Book from './pages/book';
import UserProfile from './pages/userprofile';
import UpdateForm from './pages/update';
import AdminLayout from './components/adminLayout';
import AdminDashboard from './pages/admin/adminDashboard';
import User from './pages/admin/user.jsx';
import Role from './pages/admin/role.jsx';
import RoomType from './pages/admin/roomType.jsx';
import Rooms from './pages/admin/room.jsx';

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
    <Route path="/admin" element={<AdminLayout />}>
      <Route index element={<AdminDashboard />} />
      <Route path="users" element={<User />} />
      <Route path="roles" element={<Role />} />
      <Route path="roomTypes" element={<RoomType />} />
      <Route path="rooms" element={<Rooms />} />
    </Route>
  </Routes>

);

export default AppRoutes;
