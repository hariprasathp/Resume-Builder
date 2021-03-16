import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { ResumeBuilder } from "./containers/ResumeBuilder";

import { RootStore, StoreProvider } from "./store";

import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";

const customHistory = createBrowserHistory();

const store = new RootStore();

const App: React.FC = () => (
  <Router history={customHistory}>
    <StoreProvider value={store}>
      <ResumeBuilder />
    </StoreProvider>
  </Router>
);

export default App;
