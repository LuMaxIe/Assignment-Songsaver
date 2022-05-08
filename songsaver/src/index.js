import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { store } from './redux/app/store';
import App from './App';
import './styles/index.css';
import { About } from './routes/About';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

