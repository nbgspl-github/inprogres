import React, { useState } from 'react';

const RegisterForm = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Here, you can implement your registration logic
    // Typically, you would make an API call to a server
    // For simplicity, we'll just log the email and password
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the form
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h2>Register</h2>
      <form>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="button" onClick={handleRegister}>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;