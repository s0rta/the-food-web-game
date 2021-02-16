import React from 'react';
import Menu from '../components/Menu/Menu';

import "./MainMenu.css"

class MainMenu extends React.Component {
    render()
    {
        return (
            <div className="main-menu-wrap">
                <div className="main-menu">
                    <h1>Welcome to The Salt Marsh Game!</h1>
                    <Menu/>
                </div>
            </div>
        )
    }
}

export default MainMenu;