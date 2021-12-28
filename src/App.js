import "./App.css";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import LevelSelect from "./pages/LevelSelect";
import Credits from "./pages/Credits";
import Tutorial from "./pages/Tutorial";
import Educators from "./pages/Educators"
import Contact from "./pages/Contact";
import Glossary from './pages/Glossary';

import Nav from "./components/Nav";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro";

function App() {
  return (
    <div>
      <Router>
        <div className="App"></div>
        <Nav language="en" />

        <Switch>
          <Route path="/game/:level/:language" component={Game} />
          <Route path="/level-select/:language" component={LevelSelect} />
          <Route path="/intro/:language" component={Intro} />
          <Route path="/tutorial/:language" component={Tutorial} />
          <Route path="/Credits/:language" component={Credits} />
          <Route path="/for-educators/:language" component={Educators} />
          <Route path="/Contact/:language" component={Contact} />
          <Route path="/Glossary/:language" component={Glossary} />
          <Route path="/">
            <MainMenu language="en" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
