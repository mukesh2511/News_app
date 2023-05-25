import React from "react";

const NewsItem = (props) => {
  let { title, description, Imageurl, newsUrl, publishedAt, author, source } =
    props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="  badge    bg-danger"
          style={{
            display: "flex",
            justifyContent: "flex-end",
            position: "absolute",
            right: 0,
          }}
        >
          {source}
        </span>
        <img
          src={
            !Imageurl
              ? "https://images.indianexpress.com/2023/03/Ichthyosaur-fossil-20230314-1.jpg"
              : Imageurl
          }
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            ...
          </h5>
          <p className="card-text">{description}...</p>
          <p className="card-text">
            <small className="text-muted">
              By {!author ? "Unknown" : author} on
              {new Date(publishedAt).toUTCString()}
            </small>
          </p>

          <a
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-dark btn-sm"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
