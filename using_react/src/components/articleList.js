import React, { useEffect, useState } from "react";
import axios from "axios";
import Article from "@components/article";
const {REACT_APP_NYTIMES_API_KEY} = process.env
const ArticleList = ({ category }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/topstories/v2/" +
          category +
          `.json?api-key=${REACT_APP_NYTIMES_API_KEY}`
      )
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      });
  }, [category]);
  return !data ? null : (
    <>
      <div className="display-flex">
        <div className="article-list-container">
          {data.results.map((u, i) => (
            <Article data={u} key={i} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleList;
