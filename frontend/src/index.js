import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import { store } from './app/store'
import { Provider } from 'react-redux'

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/scss/main.scss';

// Import Swiper styles
import 'swiper/scss';

createRoot(document.getElementById('root')).render(
<BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);


reportWebVitals();
