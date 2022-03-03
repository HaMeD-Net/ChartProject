import './App.css';
import 'antd/dist/antd.css';
import React from "react";
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout";
import ChartProvider from './components/context/ChartContext';
import Report from './components/Report';

function App() {
  return (
    <div className="App">
      <ChartProvider>
        <Routes>
          <Route path="/report" element={<Report />} />
          <Route path="/" element={<Layout />} />
        </Routes>
      </ChartProvider>
    </div>
  );
}

export default App;
