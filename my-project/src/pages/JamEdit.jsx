import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGetUserID } from "../hooks/useGetUserInfo";
import axios from "axios";

const JamEdit = () => {
  const [jam, setJam] = useState({});
  const [isUserCreator, setIsUserCreator] = useState();

  const path = useLocation().pathname.split("/")[2];
  const userId = useGetUserID();

  const navigate = useNavigate();

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
  }, [path, userId]);

  useEffect(() => {
    if (isUserCreator === false) {
      navigate("/jams");
    }
  }, [isUserCreator]);

  return <div>JamEdit</div>;
};

export default JamEdit;
