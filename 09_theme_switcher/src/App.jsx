import { useEffect, useState } from "react";
import { ThemeProvider } from "./contexts/Theme";
import BtnComp from "./components/BtnComp";
import Card from "./components/Card";
const LIGHT = "light";
const DARK = "dark";
function App() {
  const [themeMode, setThemeMode] = useState(LIGHT);
  const lightTheme = () => {
    setThemeMode(LIGHT);
  };

  const darkTheme = () => {
    setThemeMode(DARK);
  };

  // NOTE actualy change in theme

  useEffect(() => {
    const htmlClassList = document.querySelector("html").classList;
    htmlClassList?.remove(DARK)?.remove(LIGHT);
    htmlClassList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <BtnComp />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
