import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import SummaryForm from "./pages/summary/SummaryForm";
import Entry from "./pages/entry/Entry";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Entry} />
        <Route path='/summaryform' component={SummaryForm} />
      </Switch>
    </Router>
  );
}

export default App;
