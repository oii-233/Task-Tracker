import React from "react";
import { useTasks } from "../store/taskContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { darkMode, setDarkMode } = useTasks();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className={darkMode ? "dark-mode" : ""}>
      <h1>Task Tracker</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/stats">Stats</Link>
      </nav>
      <button className="dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </header>
  );
};

export default Header;
