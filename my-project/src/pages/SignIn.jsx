import React from "react";

const SignIn = () => {
  return (
    <div className="flex justify-center gap-6">
      <Login />
      <h2 className="font-bold mt-5">or</h2>
      <Register />
    </div>
  );
};

const Login = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col p-4 w-80 border gap-2 ">
        <h1 className="font-bold text-lg text-center">Login</h1>
        <h2>Username</h2>
        <input className="border focus:outline-none p-1 px-2" />
        <h2>Password</h2>
        <input className="border focus:outline-none p-1 px-2" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded cursor-pointer">
          Login
        </button>
      </div>
    </div>
  );
};

const Register = () => {
  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col p-4 w-80 border gap-2 ">
        <h1 className="font-bold text-lg text-center">Register</h1>
        <h2>Username</h2>
        <input className="border focus:outline-none p-1 px-2" />
        <h2>Email</h2>
        <input className="border focus:outline-none p-1 px-2" />
        <h2>Password</h2>
        <input className="border focus:outline-none p-1 px-2" />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded cursor-pointer">
          Register
        </button>
      </div>
    </div>
  );
};

export default SignIn;
