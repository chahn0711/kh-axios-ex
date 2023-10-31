import { useState, useCallback } from "react";
import Categories from "../component/Categories";
import NewsList from "../component/NewsList";

const News = () => {
  const [category, setCategory] = useState("all");
  const onSelect = useCallback((category) => setCategory(category), []);
  return (
    <>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};
export default News;
