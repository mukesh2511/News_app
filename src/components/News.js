import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalresults, setTotalResults] = useState(0);

  const toCapital = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pagesize}`;

    setLoading(true);
    let res = await fetch(url);
    props.setProgress(30);
    let data = await res.json();
    props.setProgress(70);
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);

    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${toCapital(props.category)} - NewsWala`;

    updateNews();
  }, []);

  // const handlePrevClick = async () => {
  //   // let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //   props.country
  //   // }&category=${
  //   //   props.category
  //   // }&apiKey=97ca37fca834493c80f57c1f9c6fc2ae&page=${
  //   //   this.state.page - 1
  //   // }&pageSize=${props.pagesize}`;
  //   // this.setState({ loading: true });
  //   // let res = await fetch(url);
  //   // let data = await res.json();
  //   // this.setState({
  //   //   page: this.state.page - 1,
  //   //   articles: data.articles,
  //   //   loading: false,
  //   // });
  //   setPage(page - 1);

  //   updateNews();
  // };

  // const handleNextClick = async () => {
  //   // if (
  //   //   page + 1 >
  //   //   Math.ceil(totalResults / props.pagesize)
  //   // ) {
  //   // } else {
  //   //   let url = `https://newsapi.org/v2/top-headlines?country=${
  //   //     props.country
  //   //   }&category=${
  //   //     props.category
  //   //   }&apiKey=97ca37fca834493c80f57c1f9c6fc2ae&page=${
  //   //    page + 1
  //   //   }&pageSize=${props.pagesize}`;
  //   //   setState({ loading: true });
  //   //   let res = await fetch(url);
  //   //   let data = await res.json();
  //   //   .setState({
  //   //     page: state.page + 1,
  //   //     articles: data.articles,
  //   //     loading: false,
  //   //   });
  //   // }
  //   setPage(page + 1);
  //   updateNews();
  // };

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${props.apiKey}&page=${
      page + 1
    }&pageSize=${props.pagesize}`;
    setPage(page + 1);
    let res = await fetch(url);
    let data = await res.json();
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
  };

  return (
    <>
      <h1
        className="  text-center"
        style={{ margin: "20px 0 20px 0", marginTop: "80px" }}
      >
        NewsWala's - Top {toCapital(props.category)} Headlines
      </h1>
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalresults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element, i) => {
              return (
                <div className="col-md-4" key={i}>
                  <NewsItem
                    title={!element.title ? "" : element.title.slice(0, 45)}
                    description={
                      !element.description
                        ? ""
                        : element.description.slice(0, 88)
                    }
                    Imageurl={element.urlToImage}
                    newsUrl={element.url}
                    publishedAt={element.publishedAt.slice(0, 10)}
                    author={element.author}
                    source={element.source.name}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container  d-flex justify-content-between">
            <button
              disabled={page <= 1}
              type="button"
              onClick={handlePrevClick}
              className="btn btn-dark"
            >
              &larr; Previous
            </button>
            <button
              type="button"
              disabled={
                page + 1 >
                Math.ceil(totalResults / props.pagesize)
              }
              onClick={handleNextClick}
              className="btn btn-dark"
            >
              Next &rarr;
            </button>
          </div> */}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pagesize: 6,
  category: "science",
  apiKey: "97ca37fca834493c80f57c1f9c6fc2ae",
};

News.propTypes = {
  country: PropTypes.string,
  apiKey: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
