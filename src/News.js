import { useCallback, useState } from "react";
import axios from "axios";
import Categories from "./Categories";
import NewsList from "./NewsList";

const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories onSelect={onSelect} category={category} />
      <NewsList category={category} />
    </>
  );
};

export default News;
