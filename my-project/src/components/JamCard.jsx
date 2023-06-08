import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JamCard = ({ jam }) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchUsername = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/users/find/${jam.userId}`
      );
      setUser(res.data);
    };
    fetchUsername();
  }, []);

  return (
    <div className="flex p-3 m-2 border gap-5 w-72 h-40">
      <div>
        <img
          className="w-28"
          src="https://img.itch.zone/aW1hZ2UyL2phbS8zMjk0MTYvMTE2NTA5ODIucG5n/original/kSruwo.png"
        />
      </div>
      <div className="flex flex-col">
        <Link to={`/jam/${jam._id}`}>
          <h2 className="font-bold">{jam.title}</h2>
        </Link>
        <p className=" text-gray-500 text-xs">{jam.desc}</p>
        <p className=" text-sm">
          Hosted by <span className=" underline">{jam.userName}</span>
        </p>
      </div>
    </div>
  );
};

export default JamCard;
