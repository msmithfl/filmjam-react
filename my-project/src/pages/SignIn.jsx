import axios from "axios";
import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("http://localhost:8800/api/auth/signin", {
        name,
        password,
      });

      //setting cookie
      setCookies("access_token", res.data.token);
      //setting local variables
      window.localStorage.setItem("userID", res.data.others._id);
      window.localStorage.setItem("name", res.data.others.name);

      navigate("/jams");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col p-4 w-80 border gap-2 ">
        <h1 className="font-bold text-lg text-center">Login</h1>
        <h2>Username</h2>
        <input
          type="text"
          className="border focus:outline-none p-1 px-2"
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          className="border focus:outline-none p-1 px-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Login
        </button>
      </div>
    </div>
  );
};

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      //register
      await axios.post("http://localhost:8800/api/auth/signup", {
        name,
        email,
        password,
      });
      //login
      const res = await axios.post("http://localhost:8800/api/auth/signin", {
        name,
        password,
      });

      //setting cookie
      setCookies("access_token", res.data.token);
      //setting local variables
      window.localStorage.setItem("userID", res.data.others._id);
      window.localStorage.setItem("name", res.data.others.name);

      navigate("/jams");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="flex justify-center h-full">
      <div className="flex flex-col p-4 w-80 border gap-2">
        <h1 className="font-bold text-lg text-center">Register</h1>
        <h2>Username</h2>
        <input
          type="text"
          className="border focus:outline-none p-1 px-2"
          onChange={(e) => setName(e.target.value)}
        />
        <h2>Email</h2>
        <input
          type="text"
          className="border focus:outline-none p-1 px-2"
          onChange={(e) => setEmail(e.target.value)}
        />
        <h2>Password</h2>
        <input
          type="password"
          className="border focus:outline-none p-1 px-2"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default SignIn;
