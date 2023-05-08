
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Overview from './pages/Overview';
import ClaimsView from './pages/ClaimsView';
import Catalogue from './pages/Catalogue';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} /> 
        <Route path="/claims" element={<ClaimsView />} /> 
        <Route path="/catalogue" element={<Catalogue />} />
      </Routes>
  </Router>
  );
}

export default App;
