import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Jam = () => {
  const path = useLocation().pathname.split("/")[2];

  const [jam, setJam] = useState({});
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchJamData = async () => {
      try {
        const jamRes = await axios.get(
          `http://localhost:8800/api/jams/find/${path}`
        );
        setJam(jamRes.data);
        console.log(jamRes.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchJamData();
  }, [path]);

  return (
    <div>
      <h1>{jam.title}</h1>
      <p>{jam.desc}</p>
    </div>
  );
};

export default Jam;
