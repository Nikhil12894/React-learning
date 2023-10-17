import React from "react";
import books from "/books.jpeg";
const Logo = ({ width = "100px" }) => {
  return (
    <div>
      <img src={books} width={width} />
    </div>
  );
};

export default Logo;
