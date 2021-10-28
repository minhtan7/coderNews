import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";

const SideBar = ({ category, setCategory }) => {
  const categoryArr = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="d-flex flex-column">
      {categoryArr.map((el) => (
        <Button key={el} className="mt-4" value={el} onClick={handleCategory}>
          {el}
        </Button>
      ))}
    </div>
  );
};

export default SideBar;
