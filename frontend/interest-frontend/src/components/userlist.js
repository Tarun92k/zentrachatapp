// src/components/UserList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import authService from '../services/authService';

function UserList() {
  const [users, setUsers] = useState([]);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/users/', {
      headers: { Authorization: `Bearer ${authService.getCurrentUser().access}` }
    }).then(response => {
      setUsers(response.data);
    });
  }, []);

  const sendInterest = (userId) => {
    axios.post('http://localhost:8000/api/users/interests/', {
      receiver: userId
    }, {
      headers: { Authorization: `Bearer ${authService.getCurrentUser().access}` }
    }).then(response => {
      setInterests([...interests, response.data]);
    }).catch(error => {
      console.error('Send interest error', error);
    });
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username}
            <button onClick={() => sendInterest(user.id)}>Send Interest</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
