import React from "react";
import { Link } from "react-router-dom";

import { Button, Wrapper, Menu, MenuItem } from "react-aria-menubutton";

import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div class="nav-bar">
        <div class="left-nav">
          <Link to="/" className="nav-title nav-elm">
            The Food Web Game
          </Link>
          <Link to="/for-educators" className="nav-elm">
            For Educators
          </Link>
          <Link to="/glossary" className="nav-elm">
            Glossary
          </Link>
          <Link to="/credits" className="nav-elm">
            Credits
          </Link>
          <Link to="/contact" className="nav-elm">
            Contact
          </Link>
        </div>
        <div className="right-nav">
          <Wrapper className="playMenuButton">
            <Button className="btn--nav btn btn--secondary">
              Play Game
            </Button>
            <Menu className="playMenuButton-menu">
              <ul>
                <li key="2">
                  <Link to="/intro">
                    <MenuItem className="playMenuButton-menuItem">
                      Introduction to Key Concepts
                    </MenuItem>
                  </Link>
                </li>
                <li key="3">
                  <Link to="/tutorial">
                    <MenuItem className="playMenuButton-menuItem">
                      Tutorial
                    </MenuItem>
                  </Link>
                </li>
                <li key="1">
                  <Link to="/">
                    <MenuItem className="playMenuButton-menuItem">
                      Play Rocky Inner Tidal (Coming soon) (Easy)
                    </MenuItem>
                  </Link>
                </li>

                <li key="0">
                  <Link to="/level-select">
                    <MenuItem className="playMenuButton-menuItem">
                      Play Salt Marsh (Hard)
                    </MenuItem>
                  </Link>
                </li>
              </ul>
            </Menu>
          </Wrapper>
        </div>
      </div>
    );
  }
}

export default Nav;
