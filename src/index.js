import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LogoPage from './components/logo'; // 로고 페이지 컴포넌트 임포트
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LogoPage />} /> {/* "/" 경로에 LogoPage 컴포넌트를 렌더링 */}
        <Route path="/main" element={<App />} /> {/* "/main" 경로에 App 컴포넌트를 렌더링 */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();



/*
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LogoPage />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
*/
