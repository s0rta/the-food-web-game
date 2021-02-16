import './App.css';
import MainMenu from "./pages/MainMenu"
import Game from "./pages/Game"
import LevelSelect from "./pages/LevelSelect"
import About from "./pages/About"
import Credits from "./pages/Credits"

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

function App() {
    return (
        <Router>
            <div className="App">
                
            </div>

            <Switch>
              <Route path="/game/:level" component={Game} />
              <Route path="/level-select">
                <LevelSelect/>
              </Route>
              <Route path="/about">
                <About/>
              </Route>
              <Route path="/Credits">
                <Credits/>
              </Route>
              <Route path="/">
                <MainMenu/>
              </Route>
            </Switch>
        </Router>
    );
}

export default App;
