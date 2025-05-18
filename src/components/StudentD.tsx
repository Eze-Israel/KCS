import React from 'react'
import Link from 'next/link'
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useLogin } from '../hooks/useLogin';
import {  MdLock } from 'react-icons/md';
import { FaUser, FaEyeSlash, FaEye } from 'react-icons/fa';


const  StudentD = () => {
  const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const loginMutation = useLogin();
      const router = useRouter();
      const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => setShowPassword((prev) => !prev);
     
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        loginMutation.mutate({username, password });
        if (username === '2345' && password === 'password') {
          router.push('/dashboard');
      };
      };

  return (

    <div
      className="min-h-screen bg-cover bg-center md:flex md:items-center justify-center relative scree"
      style={{ backgroundImage: "url('/images/design.jpg')" }} 
    >
        <div className="md:w-1/2">
                  <div className="ellipse"><img alt="Ellipse" src="/images/circle33.png"/></div>
                  <div className="ellipse-2"><img  alt="Ellipse" src="/images/schoolboy.png" /></div>
       </div>

         {/* Right side: Login form */}
        <div className="md:w-1/2 p-2 md:p-10 right-div">
        <Link href="/">
              <span className="p-2 md:text-xl hover:text-purple-600 cursor-pointer right-0 absolute top-0 ">
                &larr; Back to Home
              </span>
            </Link>
           
            <div className='mb-6'>
            <img
              src="images/NEXT.png" 
              alt="Logo"
              className="w-[20px] h-[20px] md:w-[50px] md:h-[50px] object-cover m-auto"
            />
            <h2 className="text-xl md:text-3xl font-bold block md:text-center mb-9 welcome">Next Result System</h2>
            </div>

            <h1 className="text-xl md:text-4xl font-bold block text-center mb-9 welcome">Welcome</h1>
            
          {/* start here */}
          <form onSubmit={handleSubmit} className="space-y-4 form">
             <div className='md:pl-26 username'>
              <label htmlFor="username" className="block text-md font-medium text-gray-700">
                <FaUser/>
              </label>
              <input
                id="username"
                type="text"
                className="md:w-1/2 border-b-2 border-gray-400 focus:outline-none focus:border-purple-600"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                placeholder='Username'
              />
            </div>

            <div className='md:pl-26 relative password'>
              <label htmlFor="password" className="block text-md font-medium text-gray-700">
            <MdLock className="cursor-pointer" />
              </label>
              <input
                id="password"
                 type={showPassword ? 'text' : 'password'}
                className="md:w-1/2 border-b-2 border-gray-400 focus:outline-none focus:border-purple-600 "
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder='Password'
              />
               <div
                onClick={togglePassword}
                 className="absolute top-1/2 right-48 -translate-y-1/2 cursor-pointer"
                >
                   {showPassword ? <FaEye /> : <FaEyeSlash /> }
               </div>
            </div>

            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-20 md:w-40 bg-blue-900 text-white
               py-2 px-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50 flex justify-center m-auto"
            >
              {loginMutation.isPending ? 'Logging in...' : 'Log in'}
            </button>
            {loginMutation.isError && (
              <p className="text-red-500 text-sm text-center mt-4">
                {(loginMutation.error as Error).message}
              </p>
            )}
            {loginMutation.isSuccess && (
              <p className="text-green-500 text-sm text-center">
                Logged in successfully!
              </p>
            )}
          </form>

      </div>
        <div className='absolute bottom-0 right-50'>
        <img
              src="images/studentTech.png" 
              alt="studentLogo"
              className="w-[20px] h-[20px] md:w-[190px] md:h-[120px] object-cover"
            />
            </div>
    </div>

  )
}

export default StudentD