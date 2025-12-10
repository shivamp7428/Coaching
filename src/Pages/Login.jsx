import React, { useState } from "react";
import { Mail, Lock, User } from "lucide-react";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">

      <div className="bg-white w-full max-w-md p-8 rounded-2xl border border-gray-200">

        <h1 className="text-3xl text-teal-600 text-center">
          {isSignup ? "Create Account" : "Welcome Back"}
        </h1>
        <p className="text-gray-500 text-center mt-1">
          {isSignup ? "Sign up to continue" : "Login to your account"}
        </p>

        <form className="mt-8 space-y-5">

          {isSignup && (
            <div>
              <label className="block text-gray-700  mb-1">
                Full Name
              </label>
              <div className="flex items-center border rounded-xl px-4 py-3">
                <User className="text-teal-600" size={20} />
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="ml-3 w-full font-light outline-none"
                  required
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-gray-700  mb-1">
              Email Address
            </label>
            <div className="flex items-center border rounded-xl px-4 py-3">
              <Mail className="text-teal-600" size={20} />
              <input
                type="email"
                placeholder="Enter your email"
                className="ml-3 w-full font-light outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700  mb-1">
              Password
            </label>
            <div className="flex items-center border rounded-xl px-4 py-3">
              <Lock className="text-teal-600" size={20} />
              <input
                type="password"
                placeholder="Enter your password"
                className="ml-3 w-full font-light outline-none"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl text-lg font-light transition"
          >
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p className="mt-6 text-center font-light text-gray-700">
          {isSignup ? (
            <>
              Already have an account?{" "}
              <span
                className="text-teal-600  cursor-pointer hover:underline"
                onClick={() => setIsSignup(false)}
              >
                Login
              </span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span
                className="text-teal-600  cursor-pointer hover:underline"
                onClick={() => setIsSignup(true)}
              >
                Sign Up
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
