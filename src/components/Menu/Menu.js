import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'

class Menu extends React.Component {
    render()
    {
        return(
            <div>
             <Link to="/level-select">Play Game</Link>
             {/* <Link to="/about">About</Link>
             <Link to="/credits">Credits</Link> */}
            </div>
        )
    }
}

export default Menu;