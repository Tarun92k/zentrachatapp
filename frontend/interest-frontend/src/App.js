import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/registercomponent';
import Login from './components/Login';
import userlist from './components/userlist';
import chatroom from './components/chatroom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<registercomponent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<userlist />} />
        <Route path="/chat/:roomName" element={<chatroom />} />
      </Routes>
    </Router>
  );
}

export default App;
