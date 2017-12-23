import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
// import { ApolloProvider } from 'react-apollo';
import App from './App';
// import 'css-spaces/dist/spaces.css';
// import 'uikit/dist/css/uikit.css';
// import 'semantic-ui/dist/semantic.css';
import './index.css';
// import './themes/dist/index.css';

// import {client as userClient} from "./apollo-clients/user"

ReactDOM.render(
//  <ApolloProvider client={userClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  //</ApolloProvider>
, document.getElementById('root'));
