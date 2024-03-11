import React from "react";
import Login from "./pages/login";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";

const App = () => {
  return (
    <div style={{ padding: "0px" }}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default App;
