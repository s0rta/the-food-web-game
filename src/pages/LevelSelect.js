import React from 'react';
import Menu from '../components/Menu/Menu';

import {Link} from "react-router-dom"

import "./LevelSelect.css"

class LevelSelect extends React.Component {
    render()
    {
        return (
            <div className="level-select">
                <h1>Level Select</h1>
                <div className="levels">
                    <Link to="/game/1">
                        <div className="level">1</div>
                    </Link>
                    <Link to="/game/2">
                        <div className="level">2</div>
                    </Link>
                    <Link to="/game/3">
                        <div className="level">3</div>
                    </Link>
                    <Link to="/game/4">
                        <div className="level">4</div>
                    </Link>
                    <Link to="/game/5">
                        <div className="level">5</div>
                    </Link>
                    <Link to="/game/6">
                        <div className="level">6</div>
                    </Link>
                    <Link to="/game/7">
                        <div className="level">7</div>
                    </Link>
                </div>

            </div>
        )
    }
}

export default LevelSelect;