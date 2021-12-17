import React from "react";
import { Link } from "react-router-dom";
import "./MainMenu.css";

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu-wrap copy-wrap">
        <div className="main-menu container">
          <div className="header-wrap ">
            <div class="header-text">
              <img
                class="header-img"
                src="/img/home.jpg"
              />
              <h1>The Food Web Game</h1>
              <p class="h1-subhead">
                A game about environmental services & learning how to protect them.
              </p>
              <p>Coastal ecosystems are full of diverse, marine life and are vitally important around the world. These ecosystems provide a wide range of benefits to people, including shoreline protection, fishery production and water filtration. These benefits are known as ecosystem services. Unfortunately, coastal ecosystems and the services they provide are threatened—warming waters, rising sea levels, invasive species, and pollution are only a few of the threats that these ecosystems face. </p>
              <p>Conservation aims to protect these species and maintain ecosystem services, but resources are limited. We do not have unlimited money, human power or time; and we need to decide which species to prioritize. In this learning module, you will learn more about coastal ecosystems and the threats they face; and you will develop skills to balance uncertainty and complexity. </p>
              <p>Here to just play the game? If it’s your first time, we suggest starting with the ‘Introduction to key concepts’ and ‘Game tutorial’ pages (found under the Play Game tab) before jumping into the game. There are two difficulty levels for this game. The ‘Rocky Intertidal Zone’ is the easier version and the ‘Salt Marsh’ is the more challenging version.</p>
              <p>Are you an educator looking to use this game in your classroom? You’ll find lesson plans, activities and assessments on the ‘Educators’ page.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
