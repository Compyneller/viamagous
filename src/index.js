import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import VideoContext from "./context/VideoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <VideoContext>
      <App />
    </VideoContext>
  </React.StrictMode>
);
