import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useLocation } from "react-router-dom";
import { useGetUserID } from "../hooks/useGetUserInfo";

const Jam = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [jam, setJam] = useState({});
  const [channel, setChannel] = useState({});

  const path = useLocation().pathname.split("/")[2];
  const userId = useGetUserID();

  useEffect(() => {
    const fetchJamData = async () => {
      try {
        const jamRes = await axios.get(
          `http://localhost:8800/api/jams/find/${path}`
        );
        setJam(jamRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJamData();
  }, [path]);

  const handleJamEnter = async () => {
    try {
      await axios.put(`http://localhost:8800/api/users/enterJam/${path}`, {
        userId,
      });
      alert("Jam Entered!");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>{jam.title}</h1>
      <p>{jam.desc}</p>
      {!cookies.access_token ? (
        <Link to="/signin">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Sign in to enter
          </button>
        </Link>
      ) : (
        <div className="">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            onClick={handleJamEnter}
          >
            Enter Jam
          </button>
        </div>
      )}
    </div>
  );
};

export default Jam;
