import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { TaskProvider, useTasks } from "./store/taskContext";
import "./styles/global.css";

const Root = () => {
  const { darkMode } = useTasks();

  // Apply dark-mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <Root />
    </TaskProvider>
  </React.StrictMode>
);
