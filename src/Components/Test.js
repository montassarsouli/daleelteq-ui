import React from "react";

const Test = () => {
  return (
    <div className="flex">
      <div className="py-0 flex items-end bg-gray-500">
        01 first try by the way
      </div>
      <div className="py-2 flex flex-col justify-center items-center grow">
        <div className="bg-gray-500 py-4">first element test long</div>
        <div className="bg-gray-400">second element test</div>
        <div className="bg-gray-500">third</div>
      </div>
    </div>
  );
};
export default Test;
/*
      <div className="py-0 flex items-end bg-gray-500">
        01 first try by the way
      </div>
      <div className="py-2 flex flex-col justify-center">
        <div className="bg-gray-500 py-4">first element test long</div>
        <div className="bg-gray-400">second element test</div>
        <div className="bg-gray-500">third</div>
      </div>
*/
