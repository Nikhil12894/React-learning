import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
  const data = useLoaderData();
  //ANOTHER WAY to load data on navigation

  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/nikhil12894")
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .catch((err) => console.error(err));
  // }, []);
  return (
    <div className="text-center bg-slate-600 text-white">
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="github picture" />
    </div>
  );
}

export default Github;

//ANOTHER WAY
export const githubInfo = async () => {
  const response = await fetch("https://api.github.com/users/nikhil12894");
  return response.json();
};
