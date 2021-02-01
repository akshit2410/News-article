import React, { useState } from "react";
import ArticleList from "@components/articleList";
import Header from "@components/header";
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
