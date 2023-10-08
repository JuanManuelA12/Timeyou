// eslint-disable-next-line no-unused-vars
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store.js";

<<<<<<< HEAD
import { library } from '@fortawesome/fontawesome-svg-core';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
library.add(faQuoteLeft, faQuoteRight);

=======
>>>>>>> 31df1755a4c1a1e8dbfdb85b13bc3736822d6d13
ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);
