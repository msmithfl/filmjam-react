import axios from "axios";
import React, { useEffect, useState } from "react";
import { useGetUserID, useGetUserName } from "../hooks/useGetUserInfo";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const CreateJam = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [tags, setTags] = useState([]);
  const [cookies, setCookies] = useCookies(["access_token"]);
  const [jam, setJam] = useState("");

  const userId = useGetUserID();
  const userName = useGetUserName();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `http://localhost:8800/api/jams`,
        {
          title,
          desc,
          userId,
          userName,
        },
        {
          headers: {
            Authorization: `Bearer ${cookies.access_token}`,
          },
        }
      );
      setJam(res.data);

      //navigate(`/jam/${res.data._id}`);
      console.log("Jam Created!");
    } catch (err) {
      console.error(err);
      alert(err);
    }
  };

  useEffect(() => {
    const saveCreatedJam = async () => {
      try {
        if (jam && jam._id) {
          // Check if jam and jam._id are defined
          await axios.put(
            `http://localhost:8800/api/users/createJam/${jam._id}`,
            {
              userId,
            },
            {
              headers: {
                Authorization: `Bearer ${cookies.access_token}`,
              },
            }
          );
          navigate(`/jam/${jam._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    saveCreatedJam();
  }, [jam]);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col p-4 w-80 border gap-2 ">
        <h1 className="font-bold text-lg">Create a Jam!</h1>
        <h2>Title*</h2>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="border focus:outline-none p-1 px-2"
        />
        <h2>Desc</h2>
        <input
          className="border focus:outline-none p-1 px-2"
          onChange={(e) => setDesc(e.target.value)}
        />
        <h2>
          Tags <span className=" text-xs">(separated by comma)</span>
        </h2>
        <input className="border focus:outline-none p-1 px-2" />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold my-2 py-2 px-4 rounded cursor-pointer"
          onClick={handleSubmit}
        >
          Create
        </button>
      </div>
    </div>
  );
};

export default CreateJam;
