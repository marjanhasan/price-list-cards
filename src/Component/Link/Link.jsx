import React from "react";

const Link = ({ route }) => {
  return (
    <li className="mr-20 hover:bg-blue-600">
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
