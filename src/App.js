import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
import MentionsLegales from "./pages/MentionsLegales";
import Page404 from "./pages/Page404";
import Instagram from "./pages/Instagram";
// Styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route
              path="/"
              element={
                JSON.parse(process.env.REACT_APP_MODE_MAINTENANCE) ? (
                  <Maintenance />
                ) : (
                  <Home />
                )
              }
            />
            <Route path="/instagram" element={<Instagram />} />
            <Route path="/terms" element={<MentionsLegales />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
