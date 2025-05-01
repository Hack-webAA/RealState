import React, { useState } from "react";

function Login() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-600 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          {isSignUp ? "Create Account" : "Welcome Back"}
        </h2>
        <form className="space-y-4">
          {isSignUp && (
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 pr-14 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-500 font-medium focus:outline-none cursor-pointer"
            >
              {showPassword ? "Hide" : "See"}
            </button>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold "
          >
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="flex items-center justify-center space-x-4">
          <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full hover:bg-red-600 cursor-pointer">
             Google
          </button>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-md w-full hover:bg-blue-900 cursor-pointer">
            Facebook
          </button>
        </div>

        <p className="text-center text-sm text-gray-600">
          {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-600 font-semibold cursor-pointer"
          >
            {isSignUp ? "Login" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
