import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { ApolloProvider } from 'react-apollo';
import App from './App';

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/main.scss';
// import './themes/dist/index.css';

// import {client as userClient} from "./apollo-clients/user"

ReactDOM.render(
//  <ApolloProvider client={userClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</ApolloProvider>
, document.getElementById('root'));
