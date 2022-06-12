import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl} = this.props;
    return (
      <>
        <div className="card m-3">
          <img src={imageUrl} className="card-img-top" alt="..." style={{ height: "12rem" }}/>
          <div className="card-body">
            <h5 className="card-title">{title}....</h5>
            <p className="card-text">{description}....</p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default NewsItem;
