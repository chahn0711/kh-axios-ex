import styled from "styled-components";

const NewsItemBlock = styled.div`
  display: flex;
  .thumnail {
    margin-right: 1em;
    img {
      display: block;
      width: 160px;
      height: 100px;
      object-fit: cover;
    }
  }
  .contents {
    h2 {
      margin: 0;
      a {
        color: black;
      }
    }
    p {
      margin: 0;
      line-height: 1.5;
      margin-top: 0.5rem;
      white-space: normal;
    }
  }
  /* NewsItemBlock과  NewsItemBlock 사이 */
  & + & {
    margin-top: 3em;
  }
`;
//  중괄호의 뜻 article을 뽑아냄?(map돌렸다고 가정)
const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;
  return (
    <NewsItemBlock>
      {urlToImage && (
        <div className="thumnail">
          {/* 보안성 */}
          <a href={url} target="_blank" rel="noopener noreferrer">
            <img src={urlToImage} alt="썸네일" />
          </a>
        </div>
      )}
      <div className="contents">
        <h2>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        </h2>
        <p>{description}</p>
      </div>
    </NewsItemBlock>
  );
};
export default NewsItem;
