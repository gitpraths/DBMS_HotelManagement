import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [managers, setManagers] = useState([]); // Store manager data
  const navigate = useNavigate();

  // Load manager credentials from the JSON file
  useEffect(() => {
    fetch('/managers.json') // Assuming it's in the public folder
      .then((response) => response.json())
      .then((data) => setManagers(data))
      .catch((error) => console.error('Error loading manager data:', error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the entered credentials match any manager
    const manager = managers.find(
      (m) => m.username === username && m.password === password
    );

    if (manager) {
      // If credentials are valid, navigate to dashboard
      navigate('/dashboard');
    } else {
      // If credentials are invalid, show an error message
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
