import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);
  return (
    <Router>
      <Switch></Switch>
    </Router>
  );
}

export default App;
