import styled from "styled-components";
import NewsItem from "./NewsItems";
import axios from "axios";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3em;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100px;
    padding-left: 1em;
    padding-right: 1em;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);
  // useEffect에 바로 async 걸면 x 안에 함수 만들어서 사용해야함(hook)?
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === "all" ? "all" : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=0f0f21d08f864d3c9bd3d835f1bee788`
        );
        if (response.data.status === "ok") setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  // 로딩??
  if (loading) {
    return <Loading />;
  }
  return (
    <NewsListBlock>
      {articles &&
        articles.map((artcle) => (
          <NewsItem key={artcle.url} article={artcle} />
        ))}
    </NewsListBlock>
  );
};
export default NewsList;
