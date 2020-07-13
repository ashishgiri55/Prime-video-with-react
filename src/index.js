import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/js/bootstrap.js";
import "./primevideo-global.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
