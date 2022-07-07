import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./features/api/apiSlice"; // Todo List
import { Provider } from 'react-redux';
import { store } from './app/store'; //Post Api

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <ApiProvider api={apiSlice}> */}
    <Provider store={store}>
    <App />
    </Provider>
    {/* </ApiProvider> */}
  </React.StrictMode>
);

