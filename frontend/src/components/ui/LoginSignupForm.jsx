import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const LoginSignupForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const toggleForm = () => setIsLogin(!isLogin);
  const navigate = useNavigate();
  return (
   
    <div className="min-h-screen flex items-center justify-center bg-gray-900 ">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-3xl underline font-semibold text-center text-blue-300 hover:shadow-blue-500 mb-6">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        <form>
          {/* Username */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white mb-1">Username</label>
              <input type="text" className="w-full px-4 py-2 text-white rounded-lg" required />
            </div>
          )}

          {/* Email */}
          <div className="mb-4">
            <label className="block text-white mb-1">Email</label>
            <input type="email" className="w-full px-4 py-2 text-white rounded-lg" required />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-white mb-1">Password</label>
            <input type="password" className="w-full px-4 py-2 text-white rounded-lg" required />
          </div>

          {/* Phone Number */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white mb-1">Phone Number</label>
              <input type="tel" className="w-full px-4 py-2 text-white rounded-lg" required />
            </div>
          )}

          {/* Date of Birth */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white mb-1">Date of Birth</label>
              <input type="date" className="w-full px-4 py-2 text-white rounded-lg" required />
            </div>
          )}

          {/* Gender */}
          {!isLogin && (
            <div className="mb-4">
              <label className="block text-white mb-1">Gender</label>
              <select className="w-full px-4 py-2 text-white bg-gray-700 rounded-lg">
                <option value="" disabled selected>Select your gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
          )}

          {/* Address Fields */}
          {!isLogin && (
            <>
              <div className="mb-4">
                <label className="block text-white mb-1">Street</label>
                <input type="text" className="w-full px-4 py-2 text-white rounded-lg" required />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-1">City</label>
                <input type="text" className="w-full px-4 py-2 text-white rounded-lg" required />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-1">State</label>
                <input type="text" className="w-full px-4 py-2 text-white rounded-lg" required />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-1">PIN Code</label>
                <input type="text" className="w-full px-4 py-2 text-white rounded-lg" required />
              </div>

              <div className="mb-4">
                <label className="block text-white mb-1">Country</label>
                <input type="text" className="w-full px-4 py-2 text-white rounded-lg" required />
              </div>
            </>
          )}

          <button
            type="submit" onClick={()=>{navigate("/dashboard")}}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-6">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span
            onClick={toggleForm}
            className="text-blue-400 cursor-pointer"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginSignupForm;
