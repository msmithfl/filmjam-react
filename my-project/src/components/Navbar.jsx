import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import { useCookies } from "react-cookie";
import { useGetUserID, useGetUserName } from "../hooks/useGetUserInfo";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const username = useGetUserName();

  const logout = () => {
    // reset cookie
    setCookies("access_token", "");
    // clear local storage of userID
    window.localStorage.removeItem("userID");
    window.localStorage.removeItem("name");
    navigate("/signin");
  };

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
      {!cookies.access_token ? (
        <Link to="/signin">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Sign in
          </div>
        </Link>
      ) : (
        <div className="flex items-center gap-4">
          <div>Hello, {username}</div>
          <div
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={logout}
          >
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
