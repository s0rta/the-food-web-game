import React from "react";

import "./MainMenu.css";

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu-wrap">
        <div className="main-menu container">
          <div className="header-wrap ">
            <div class="header-text">
              <h1>The Food Web Game</h1>
              <p class="h1-subhead">
                A game about environmental services & how to protect them
              </p>
              <button class="btn--primary">Play Game</button>
            </div>

            <img
              class="header-img"
              src="https://images.unsplash.com/photo-1594017358500-1edfd08093eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
