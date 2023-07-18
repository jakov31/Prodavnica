import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";
import { KontextProvider } from "./store/context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <KontextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </KontextProvider>
);
