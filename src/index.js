import React from 'react';
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './scss/app.scss';
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/400.css";

render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
  document.getElementById('root')
)