import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { DarkModeContestProvider } from "./context/darkModeContext";
import { AuthContestProvider } from "./context/authContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContestProvider>
      <AuthContestProvider>
        <App />
      </AuthContestProvider>
    </DarkModeContestProvider>
  </React.StrictMode>
);
