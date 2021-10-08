import React from 'react';
import { Link } from 'react-router-dom'

import "./Nav.css"; 

class Nav extends React.Component {
  

  render()
  {
    return (
      <div class='nav-bar'>
        <div class='left-nav'>
          <Link to="/" className="nav-title nav-elm">The Food Web Game</Link>
          <Link to="/for-educators" className="nav-elm">For Educators</Link>
          <Link to="/credits" className="nav-elm">Credits</Link>
        </div>
        <div className="right-nav">
          <Link to="/intro"><button className="btn--secondary">Play Game</button></Link>
        </div>
      </div>
    )
  }
}

export default Nav;
