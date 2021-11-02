import "./App.css";
import MainMenu from "./pages/MainMenu";
import Game from "./pages/Game";
import LevelSelect from "./pages/LevelSelect";
import About from "./pages/About";
import Credits from "./pages/Credits";
import Tutorial from "./pages/Tutorial";

import Nav from "./components/Nav";

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Intro from "./pages/Intro";

function App() {
  return (
    <div>
      <Router>
        <div className="App"></div>
        <Nav />

        <Switch>
          <Route path="/game/:level" component={Game} />
          <Route path="/level-select">
            <LevelSelect />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/intro">
            <Intro />
          </Route>
          <Route path="/tutorial">
            <Tutorial />
          </Route>
          <Route path="/Credits">
            <Credits />
          </Route>
          <Route path="/">
            <MainMenu />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
