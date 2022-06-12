import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/general"
              element={
                <News
                  key="general"
                  country="us"
                  pageSize={12}
                  category="general"
                />
              }
            />

            <Route
              exact
              path="/business"
              element={
                <News
                  key="business"
                  country="us"
                  pageSize={12}
                  category="business"
                />
              }
            />

            <Route
              exact
              path="/entertainment"
              element={
                <News
                  key="entertainment"
                  country="us"
                  pageSize={12}
                  category="entertainment"
                />
              }
            />

            <Route
              exact
              path="/health"
              element={
                <News
                  key="health"
                  country="us"
                  pageSize={12}
                  category="health"
                />
              }
            />

            <Route
              exact
              path="/science"
              element={
                <News
                  key="science"
                  country="us"
                  pageSize={12}
                  category="science"
                />
              }
            />

            <Route
              exact
              path="/sports"
              element={
                <News
                  key="sports"
                  country="us"
                  pageSize={12}
                  category="sports"
                />
              }
            />

            <Route
              exact
              path="/technology"
              element={
                <News
                  key="technology"
                  country="us"
                  pageSize={12}
                  category="technology"
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}
