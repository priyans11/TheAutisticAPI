import React, { useState, useEffect } from "react";

export const ThemeToggle: React.FC = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      className="fixed left-4 bottom-4 z-50 p-3 rounded-full bg-neutral-800 text-white shadow-lg hover:bg-neutral-700 transition-all"
      onClick={() => setDark((d) => !d)}
      aria-label="Toggle dark mode"
    >
      {dark ? "🌙" : "☀️"}
    </button>
  );
};