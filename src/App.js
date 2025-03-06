import "./App.css";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import LevelSelect from "./pages/LevelSelect";
import Credits from "./pages/Credits";
import Tutorial from "./pages/Tutorial";
import Educators from "./pages/Educators";
import Contact from "./pages/Contact";
import Glossary from "./pages/Glossary";
import Demo from "./components/Demo";
import Nav from "./components/Nav";
import {
  HashRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from "react-router-dom";
import Intro from "./pages/Intro";
import React, { useState } from "react";

function AppContent() {
  const [language, setLanguage] = useState("en");
  const history = useHistory();
  const location = useLocation();

  const handleLanguageChange = (newLanguage) => {
    setLanguage(newLanguage);

    // Get the current path without the language parameter
    const currentPath = location.pathname;
    const pathParts = currentPath.split("/");

    // If we're on the home page
    if (currentPath === "/" || pathParts.length <= 1) {
      history.push("/" + newLanguage);
      return;
    }

    // For other pages, replace the language parameter
    const languageIndex = pathParts.findIndex(
      (part) => part === "en" || part === "es"
    );
    if (languageIndex !== -1) {
      pathParts[languageIndex] = newLanguage;
    } else {
      // If no language parameter found, add it
      pathParts.push(newLanguage);
    }
    history.push(pathParts.join("/"));
  };

  return (
    <>
      <div className="App"></div>
      <Nav language={language} onLanguageChange={handleLanguageChange} />

      <Switch>
        <Route path="/Game/Demo/:difficulty/:language" component={Demo} />
        <Route
          path="/game/:level/:difficulty/:language/:retry?"
          component={Game}
        />
        <Route
          path="/level-select/:difficulty/:language"
          component={LevelSelect}
        />
        <Route path="/intro/:language" component={Intro} />
        <Route path="/tutorial/:language" component={Tutorial} />
        <Route path="/Credits/:language" component={Credits} />
        <Route path="/for-educators/:language" component={Educators} />
        <Route path="/Contact/:language" component={Contact} />
        <Route path="/Glossary/:language" component={Glossary} />
        <Route path="/:language?">
          <MainMenu language={language} />
        </Route>
      </Switch>
    </>
  );
}

function App() {
  return (
    <div>
      <Router>
        <AppContent />
      </Router>
    </div>
  );
}

export default App;
