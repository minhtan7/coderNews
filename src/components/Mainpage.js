import React, { useEffect, useState } from "react";
import NewsPagination from "./NewsPagination";

const Mainpage = ({ data, setCurrentPage, currentPage, totalPage }) => {
  return (
    <div>
      <NewsPagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPage={totalPage}
      />
      <div>
        {data.map((article) => (
          <div key={article.title} className="news-card">
            <h3>{article.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mainpage;
