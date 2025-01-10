import React, { useState, useEffect } from "react";

const DarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("dali");
      if (storedTheme) {
        setIsDarkMode(false);
        document.body.classList.add(storedTheme);
      } else {
        setIsDarkMode(true);
      }
    }
  }, []);

  const handleToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);

    if (newDarkMode) {
      document.body.classList.remove("darko");
      localStorage.removeItem("dali");
    } else {
      localStorage.setItem("dali", "darko");
      document.body.classList.add("darko");
    }
  };

  return (
    <div className="maskdark">
      <label id="theme-toggle-button">
        <input
          type="checkbox"
          id="toggle"
          aria-labelledby="theme-toggle-button"
          checked={isDarkMode}
          onChange={handleToggle}
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default DarkMode;
