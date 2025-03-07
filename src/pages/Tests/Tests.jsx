import React, { useState } from 'react';

const Test = () => {
  const [user, setUser] = useState({ name: '', email: '', password: '' });
  const { name, email, password } = user;

  const handleChange = (e) => {
    const fieldName = e.target.name;
    if (fieldName === 'name') {
      setUser({ name: e.target.value, email, password });
    }
    if (fieldName === 'email') {
      setUser({ name, email: e.target.value, password });
    }
    if (fieldName === 'password') {
      setUser({ name, email, password: e.target.value });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(user);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password">Name:</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Test;
