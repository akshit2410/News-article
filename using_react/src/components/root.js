import React, { useState } from "react";
import ArticleList from "./articleList";
import Header from "./header";
const RootComponent = () => {
  const [category, setCategory] = useState("home");

  return (
    <>
      <Header category={category} setCategory={setCategory} />
      <ArticleList category={category} />
    </>
  );
};

export default RootComponent;
