import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import News from "./components/News/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  //eslint-disable-next-line
  const [pageSize,setPageSize] = useState(12)
  const [progress,setProgress] = useState(0)

    return (
      <div>
        <Router>
          <Navbar />
          
          <Routes>
            <Route
              path="/"
              element={
                <News setProgress={setProgress} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/business"
              element={
                <News setProgress={setProgress} 
                  key="business"
                  pageSize={pageSize}
                  country="us"
                  category="business"
                />
              }
            />
            <Route
              path="/entertainment"
              element={
                <News setProgress={setProgress} 
                  key="entertainment"
                  pageSize={pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            />
            <Route
              path="/general"
              element={
                <News setProgress={setProgress} 
                  key="general"
                  pageSize={pageSize}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              path="/health"
              element={
                <News setProgress={setProgress} 
                  key="health"
                  pageSize={pageSize}
                  country="us"
                  category="health"
                />
              }
            />
            <Route
              path="/science"
              element={
                <News setProgress={setProgress} 
                  key="science"
                  pageSize={pageSize}
                  country="us"
                  category="science"
                />
              }
            />
            <Route
              path="/sports"
              element={
                <News setProgress={setProgress} 
                  key="sports"
                  pageSize={pageSize}
                  country="us"
                  category="sports"
                />
              }
            />
            <Route
              path="/technology"
              element={
                <News setProgress={setProgress} 
                  key="technology"
                  pageSize={pageSize}
                  country="us"
                  category="technology"
                />
              }
            />
          </Routes>
        </Router>
        <LoadingBar
            color="#f11946"
            progress={progress}
            height={3}
          />
      </div>
    );
}

export default App