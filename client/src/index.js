import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
import {CoffeeProvider} from './components/Context/coffee'

//add console.logs to understand Order of operations
ReactDOM.render(
  <BrowserRouter>
    <CoffeeProvider>
      <App />
    </CoffeeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
