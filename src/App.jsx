
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Overview from './pages/Overview';
import ClaimsView from './pages/ClaimsView';
import Catalogue from './pages/Catalogue';
import CompanyOnboarding from './pages/CompanyOnboarding';
import StaffProfileSetup from './pages/StaffProfileSetup';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Patients from './pages/Patients';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Overview />} /> 
        <Route path="/claims" element={<ClaimsView />} /> 
        <Route path="/patients" element={<Patients />} /> 
        <Route path="/catalogue" element={<Catalogue />} />
        <Route path="/company-onboarding" element={<CompanyOnboarding />} />
        <Route path="/staff-profilesetup" element={<StaffProfileSetup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
  </Router>
  );
}

export default App;
