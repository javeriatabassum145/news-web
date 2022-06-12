import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'

export class News extends Component {

  static defaultProps = {
    country: 'us',
    pageSize: 12,
    category: 'sports'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  // run after render
  async componentDidMount() {
    let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=65f151cd083e44db842f1648eb270264&page=1&pagesize=${this.props.pageSize}`;

    // Fetch API url leti hai or return krti hai promise
    let data = await fetch(api_url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
    console.log(`Current ${this.state.page}`);
  }

  handlePrevClick = async () => {
    let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=65f151cd083e44db842f1648eb270264&page=${
      this.state.page - 1
    }&pagesize=${this.props.pageSize}`;
    this.setState({ loading: true });

    // Fetch API url leti hai or return krti hai promise
    let data = await fetch(api_url);
    let parsedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
    console.log(`Previous Page`);
  };

  handleNextClick = async () => {
    if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
      let api_url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=65f151cd083e44db842f1648eb270264&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`;
      this.setState({ loading: true });
      // Fetch API url leti hai or return krti hai promise
      let data = await fetch(api_url);
      let parsedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
      console.log(`Next Page`);
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center text-primary">Top Headlines</h1>
        {this.state.loading && <Spinner />}
          

          <div className="row">
            {!this.state.loading && this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 88)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://region4.uaw.org/sites/default/files/bio/10546i3dac5a5993c8bc8c_6.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-primary my-4"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-primary my-4"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
