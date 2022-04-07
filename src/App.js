import React from "react";
import "./App.css";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";

function App() {
  const AppBody = styled.div`
    display: flex;
    height: 100vh;
  `;
  return (
    <div className="app">
      <Router>
        <Header />
        <AppBody>
          <SideBar />
          <Routes></Routes>
        </AppBody>
      </Router>
    </div>
  );
}

export default App;
