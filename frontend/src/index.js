import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import axios from 'axios';
import { API_URL } from "./config";

axios.defaults.baseURL = API_URL;

ReactDOM.render(
  <BrowserRouter><App/></BrowserRouter>,
  document.getElementById('root')
);
