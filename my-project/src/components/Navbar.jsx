import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/logo.png";

const Navbar = () => {
  return (
    <div className="flex justify-between m-4">
      <Link to="/">
        <div className="flex items-center gap-1 cursor-pointer">
          <img src={logo} className="w-10" />
          <div className="font-bold">filmjam.io</div>
        </div>
      </Link>
      <div className="flex gap-4 mr-10">
        <Link to="/">
          <div className="font-bold text-md">Home</div>
        </Link>
        <Link to="/jams">
          <div className="font-bold text-md">Jams</div>
        </Link>
      </div>
      <Link to="/signin">
        <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
          Sign in
        </div>
      </Link>
    </div>
  );
};

export default Navbar;
