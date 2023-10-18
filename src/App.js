import './App.css';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header/Header';
import Router from './Routes';
import { LanguageContext } from "./context/language";
import { ThemeContext } from "./context/theme";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

function App() {
  const [contextLang, setContextLang] = useState('en')
  const [contextTheme, setcontextTheme] = useState('light')

  return (
    <BrowserRouter>
      <LanguageContext.Provider value={{ contextLang, setContextLang }}>
      <ThemeContext.Provider value={{ contextTheme, setcontextTheme }}>
        <div className={contextTheme === "dark" ? "text-bg-dark" : "text-bg-white"}
          dir={contextLang === "ar" ? "rtl" : "ltr"} >
          <Header />
          <div className="container my-5">
            <Router />
          </div>
        </div>
      </ThemeContext.Provider>
      </LanguageContext.Provider>
    </BrowserRouter>
  );
}

export default App;
