import React from 'react';
import { locale, messages } from './i18n.js'
import { IntlProvider } from 'react-intl'


import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <IntlProvider
          locale={locale}
          messages={messages}
        >
    <App />
        </IntlProvider>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
