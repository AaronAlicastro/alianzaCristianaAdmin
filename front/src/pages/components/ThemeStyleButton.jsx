import { Moon, Sun } from "lucide-react";

export default function ThemeStyleButton({ isDarkMode = false }) {
  const changeTheme = () => {
    const body = document.querySelector("BODY");
    const currentClass = body.getAttribute("class");

    if (currentClass === "screen-background") {
      body.setAttribute("class", "screen-background-dark-mode");
    } else {
      body.setAttribute("class", "screen-background");
    }
  };

  return (
    <button className="ThemeStyleButton" onClick={changeTheme}>
      {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
