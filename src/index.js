// Before React 18
// ReactDOM.render(<App />, document.getElementById('root'));

// In React 18, use createRoot
import { createRoot } from "react-dom/client";
import App from "./App";

const root = document.getElementById("root");
const rootElement = createRoot(root);
rootElement.render(<App />);
