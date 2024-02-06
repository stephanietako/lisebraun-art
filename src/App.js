import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Maintenance from "./pages/Maintenance";
import MentionsLegales from "./pages/MentionsLegales";
import Page404 from "./pages/Page404";
// Styles
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
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
          <Route path="/terms" element={<MentionsLegales />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
