import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import JamCard from "../components/JamCard";
import { useCookies } from "react-cookie";

const Jams = () => {
  const [jams, setJams] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);

  useEffect(() => {
    const fetchJams = async () => {
      const res = await axios.get("http://localhost:8800/api/jams");
      setJams(res.data);
    };
    fetchJams();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-4 items-center mb-10">
        <p>
          filmjam.io is a community space for users to create and participate in
          filmjams.
        </p>
        {!cookies.access_token ? (
          <Link to="/signin">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Login to Create!
            </div>
          </Link>
        ) : (
          <Link to="/jams/create">
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
              Create a jam!
            </div>
          </Link>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center">
        {jams.map((jam) => (
          <JamCard key={jam._id} jam={jam} />
        ))}
      </div>
    </div>
  );
};

export default Jams;
