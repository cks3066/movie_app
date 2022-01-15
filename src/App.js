import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route basename={process.env.PUBLIC_URL} exact path="/">
          <Home />
        </Route>
        <Route basename={process.env.PUBLIC_URL} exact path="/movie/:id">
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
