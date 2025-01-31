import React, { useState } from 'react';



const Login = () => {
  const [email, setEmail] = useState('');

  return (
    <div className='h-screen flex justify-center items-center bg-gray-100'>
      <div className='box-border flex flex-col bg-slate-200 h-96 w-96 shadow-xl shadow-black-600 rounded-xl p-6'>
        <h1 className='text-center text-2xl font-bold mb-4'>User Login</h1>

        <form className='w-full flex flex-col justify-center items-center'>
          {/* Email Input */}
          <div className='relative mb-4 w-full'>
            <input
              type='email'
              required
              autoComplete='email'
              name='email'
              value={email}
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
              className='w-full p-3 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500'
            />
            
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            className='w-full p-3 bg-blue-500 text-white rounded-lg mt-4 hover:bg-blue-600 transition-all'
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;