import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock, FaSignInAlt, FaUserPlus } from 'react-icons/fa'; // Icons for UI

const Login = () => {
  const [state, setState] = useState('Sign Up');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if (!email || !password || (state === "Sign Up" && !name)) {
      setError('All fields are required');
      return;
    }

    // Simulate form submission or validation here
    setError('');
    // Proceed with login/signup logic
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">{state}</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={onSubmitHandler}>
          {state === 'Sign Up' && (
            <div className="mb-4">
              <FaUserAlt className="text-gray-500" />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}

          <div className="mb-4">
            <FaEnvelope className="text-gray-500" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <FaLock className="text-gray-500" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            {state === 'Login' ? <FaSignInAlt /> : <FaUserPlus />} {state}
          </button>
        </form>

        <p className="mt-4 text-center">
          {state === 'Login' ? "Don't have an account?" : 'Already have an account?'}
          <button
            type="button"
            onClick={() => setState(state === 'Login' ? 'Sign Up' : 'Login')}
            className="text-blue-500 ml-2"
          >
            {state === 'Login' ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
