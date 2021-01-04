import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pizza from './components/Pizza';
import './index.scss';

ReactDOM.render(
  <BrowserRouter>
    <Pizza />
  </BrowserRouter>,
  document.getElementById('root')
);
