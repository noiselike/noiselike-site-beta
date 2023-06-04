import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { WalletProvider } from './WalletContext.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <WalletProvider>
      <App />
    </WalletProvider>
  </React.StrictMode>
);
