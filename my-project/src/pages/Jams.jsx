import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JamCard from "../components/JamCard";

const Jams = () => {
  const [jams, setJams] = useState([]);

  useEffect(() => {
    const fetchJams = async () => {
      const res = await axios.get("http://localhost:8800/api/jams");
      setJams(res.data);
    };
    fetchJams();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 items-center">
        <p>
          filmjam.io is a community space for users to create and participate in
          filmjams.
        </p>
        <Link to="/jams/create">
          <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
            Create a jam!
          </div>
        </Link>
      </div>
      <div className="m-10">
        {jams.map((jam) => (
          <JamCard key={jam._id} jam={jam} />
        ))}
      </div>
    </div>
  );
};

export default Jams;
