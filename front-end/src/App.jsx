import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import EmailDetails from "./components/EmailDetails";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/email-details" element={<EmailDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
