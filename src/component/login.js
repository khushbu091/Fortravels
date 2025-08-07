import React from 'react';
import { FaGoogle, FaFacebookF, FaApple } from 'react-icons/fa';
import { SiJfrog } from 'react-icons/si';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-8">
        <h2 className="text-xl font-semibold mb-1 text-center">
          Sign in or create an account
        </h2>
        <p className="text-xs text-gray-500 text-center mb-6">
          Sign up for free or log in to access amazing deals and benefits!
        </p>

        <div className="space-y-3">
          <button className="flex items-center justify-center w-full py-2 rounded-full bg-blue-600 text-white font-medium">
            <FaGoogle className="mr-2" /> Sign in with Google
          </button>

          <button className="flex items-center justify-center w-full py-2 rounded-full border border-gray-300 text-gray-700 font-medium">
            <FaFacebookF className="mr-2 text-blue-600" /> Sign in with Facebook
          </button>

          <button className="flex items-center justify-center w-full py-2 rounded-full bg-black text-white font-medium">
            <FaApple className="mr-2" /> Sign in with Apple
          </button>
        </div>

        <div className="my-4 flex items-center">
          <div className="flex-grow h-px bg-gray-300" />
          <span className="mx-2 text-sm text-gray-400">or</span>
          <div className="flex-grow h-px bg-gray-300" />
        </div>

        <div className="mb-4">
          <label className="block text-xs font-medium text-gray-600 mb-1">Email</label>
          <input
            type="email"
            placeholder="id@email.com"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
          />
        </div>

        <button
          className="w-full py-2 bg-blue-100 text-blue-400 font-medium rounded-md cursor-not-allowed"
          disabled
        >
          Continue
        </button>

        <p className="text-sm text-blue-600 text-center mt-6 cursor-pointer hover:underline">
          Other ways to sign in 
        </p>

        <p className="text-[10px] text-center text-gray-400 mt-4">
          By signing in, I agree to Tour & Travels's <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>.
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
