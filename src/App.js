import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";

function App() {
  const [isLoggedIn, setISLoggedIn] = useState(false);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Home setIsLoggedIn={setISLoggedIn} />
            ) : (
              <Login setIsLoggedIn={setISLoggedIn} />
            )
          }
        />
        <Route element={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
