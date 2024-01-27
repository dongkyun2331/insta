import { useReactiveVar } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login";
import { NotFound } from "./screens/NotFound";
import { isLoggedInVar } from "./apollo";

function App() {
  const isLoggedIn = useReactiveVar(isLoggedInVar);
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
        <Route element={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;
