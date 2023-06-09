import axios from "axios";
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useLocation } from "react-router-dom";
import { useGetUserID } from "../hooks/useGetUserInfo";

const Jam = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [jam, setJam] = useState({});
  const [isUserCreator, setIsUserCreator] = useState(false);

  const path = useLocation().pathname.split("/")[2];
  const userId = useGetUserID();

  useEffect(() => {
    const fetchJamData = async () => {
      try {
        const jamRes = await axios.get(
          `http://localhost:8800/api/jams/find/${path}`
        );
        setJam(jamRes.data);
        setIsUserCreator(userId === jamRes.data.userId);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJamData();
  }, [path]);

  const handleJamEnter = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/users/enterJam/${path}`,
        {
          userId,
          jam,
        }
      );
      //refresh page
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleJamLeave = async () => {
    try {
      const res = await axios.put(
        `http://localhost:8800/api/users/leaveJam/${path}`,
        {
          userId,
          jam,
        }
      );
      //refresh page
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadVideo = async () => {
    alert("Upload Modal Popup");
  };

  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="font-bold text-2xl">{jam.title}</h1>
        <h2>
          Hosted by <span className=" underline">{jam.userName}</span>
        </h2>
        <p>{jam.desc}</p>
        <p>{jam.usersJoined ? jam.usersJoined.length : 0} Joined</p>
      </div>
      <div>
        {!cookies.access_token && (
          <Link to="/signin">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Sign in to enter
            </button>
          </Link>
        )}
        {cookies.access_token && (
          <div>
            {jam.usersJoined && jam.usersJoined.includes(userId) ? (
              <div className="">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded cursor-pointer"
                  onClick={handleJamLeave}
                >
                  Leave Jam
                </button>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded cursor-pointer"
                  onClick={handleUploadVideo}
                >
                  Upload Video
                </button>
              </div>
            ) : (
              <div className="">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded cursor-pointer"
                  onClick={handleJamEnter}
                >
                  Enter Jam
                </button>
              </div>
            )}
          </div>
        )}
        {isUserCreator && (
          <div className="">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded cursor-pointer">
              Edit Jam
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Jam;
