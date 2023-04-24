import React from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  HomePage,
  ProfilePage,
  NetworkPage,
  RegisterPage,
  LoginPage,
} from './pages';

import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/network" element={<NetworkPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default App;
