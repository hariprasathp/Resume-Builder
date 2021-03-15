import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResumeBuilder } from "./containers/ResumeBuilder";

import { RootStore, StoreProvider } from "./store";

const store = new RootStore();
ReactDOM.render(
  <StoreProvider value={store}>
    <ResumeBuilder />
  </StoreProvider>,
  document.getElementById("root")
);
