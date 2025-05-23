import React, { useContext } from 'react';
import { AdminContext } from '../context/AdminContext';
import { assets } from '../assets/assets';
import {useNavigate} from 'react-router-dom'

const Navbar = () => {
  const { aToken, setAToken } = useContext(AdminContext); // ✅ Correct use of context

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    if (aToken) {
      setAToken('');  // ✅ Clear token from context
      localStorage.removeItem('aToken');  // ✅ Remove token from localStorage
    }
  };

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        <img className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="Admin Logo" />
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>
          {aToken ? 'Admin' : 'Doctor'}
        </p>
      </div>
      <button onClick={logout} className='bg-red-400 text-white text-sm px-10 py-2 rounded-full'>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
