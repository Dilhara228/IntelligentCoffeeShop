import React, { useState, useEffect } from "react";
import { getUsers, registerUser } from "./api";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const usersData = await getUsers();
      setUsers(usersData);
    }
    fetchData();
  }, []);

  const handleRegister = async () => {
    const newUser = {
      name: "John Doe",
      email: "john@example.com",
      password_hash: "hashed_password", // In real system, hash before sending  
      phone: "1234567890",
    };
    await registerUser(newUser);
    alert("User registered successfully!");
  };

  return (
    <div>
      <h1>Users List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>{user.name} - {user.email}</li>
        ))}
      </ul>
      <button onClick={handleRegister}>Register User</button>
    </div>
  );
};

export default App;
