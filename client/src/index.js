import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { UserProvider } from "./context/user";
//import { VenuesProvider } from "./context/venues";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      {/* <VenuesProvider> */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
      {/* </VenuesProvider> */}
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
