/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:28:35
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\main.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes, } from "react-router-dom"
import App from "./App"

// 挂载路由
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
)