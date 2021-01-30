import React from "react";

const Article = ({ data }) => {
  return (
    <>
      <div className="article-container card">
        <div className="container-fluid">
          <div className="row">
            <div className="col-9">
              <h1 className="article-title-text">{data.title}</h1>
              <p className="date-text">{data.published_date}</p>
              <h6 className="abstract">{data.abstract}</h6>
              <button
                type="button"
                className="continue-reading"
                onClick={() => window.open(data.url, "_blank")}
              >
                Continue Reading
              </button>
            </div>
            <div className="col-3">
              <img src={data.multimedia[0].url} className="article-image" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
