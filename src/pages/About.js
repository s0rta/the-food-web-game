import React from 'react';
import Menu from '../components/Menu/Menu';

import "./MainMenu.css"

class About extends React.Component {
  render()
  {
      return (
    <div>
        <h1>About</h1>
        <p>Welcome to the salt marsh game, this is a small tool to help build understanding about food webs and their relation to environmental services. In this game, a disturbance will be enacted upon a salt marsh and it will be up to you to intervene, saving species in an attempt to mitigate damage to the web and services humanity relys on. This game is in very early alpha so if you have any feedback, please direct it to jacob.t.wright(at)ucdenver.edu with the subject 'salt marsh game'.</p>
    </div>
        )
        }
    }

export default About;