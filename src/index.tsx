import React from 'react';
import ReactDom from 'react-dom'
import App from "./components/app/app.component"
import {BrowserRouter as Router} from 'react-router-dom'

ReactDom.render(
    <React.StrictMode>
      <Router>
      <App/>
      </Router>
    </React.StrictMode>,document.getElementById('root')
  );
  