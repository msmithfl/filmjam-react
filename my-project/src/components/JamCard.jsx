import React from "react";

const JamCard = ({ jam }) => {
  return (
    <div className="flex p-3 m-2 border gap-5 items-center">
      <div>
        <img
          className="w-28"
          src="https://img.itch.zone/aW1hZ2UyL2phbS8zMjk0MTYvMTE2NTA5ODIucG5n/original/kSruwo.png"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-bold">{jam.title}</h2>
        <p className=" text-gray-500 text-xs">{jam.desc}</p>
        <p className=" text-sm">
          Hosted by <span className=" underline">MattS</span>
        </p>
      </div>
    </div>
  );
};

export default JamCard;
