import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetUserID, useGetUserName } from "../hooks/useGetUserInfo.js";
import JamCard from "../components/JamCard.jsx";
import { useCookies } from "react-cookie";

const Dashboard = () => {
  const userId = useGetUserID();
  const username = useGetUserName();
  const [user, setUser] = useState([]);
  const [enteredJams, setEnteredJams] = useState([]);
  const [createdJams, setCreatedJams] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users/find/${userId}`
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchEnteredJams = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users/find/enteredJams/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.access_token}`,
            },
          }
        );
        setEnteredJams(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchCreatedJams = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8800/api/users/find/createdJams/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${cookies.access_token}`,
            },
          }
        );
        setCreatedJams(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    //fetchData();
    fetchEnteredJams();
    fetchCreatedJams();
  }, []);

  return (
    <div>
      <div className="flex justify-center">
        <h1 className="text-2xl mb-5">{username}'s Dashboard</h1>
      </div>
      <div>
        <h2 className="text-xl ml-20">Entered Jams</h2>
        <div className="flex mx-10 flex-wrap justify-center">
          {enteredJams.map((jam) => (
            <JamCard key={jam._id} jam={jam} />
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-xl ml-20">Created Jams</h2>
        <div className="flex mx-10 flex-wrap justify-center">
          {createdJams.map((jam) => (
            <JamCard key={jam._id} jam={jam} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
