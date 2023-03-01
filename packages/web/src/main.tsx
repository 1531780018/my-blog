/*
 * @Author: Mowang
 * @Date: 2023-02-10 15:28:35
 * @LastEditors: Mowang
 * @Description: 
 * @FilePath: \newMylog\packages\web\src\main.tsx
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query';
import "./assets/iconfont/iconfont.css"
import App from "./App"

const queryClient = new QueryClient();
// 挂载路由
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <QueryClientProvider client={queryClient}>
    <Router>
      <App />
    </Router>
  </QueryClientProvider>
)