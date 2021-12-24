import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthContextProvider from './contexts/auth-context';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
        <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
