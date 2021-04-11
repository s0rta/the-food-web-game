import React from 'react';
import Menu from '../components/Menu/Menu';

import "./credits.css"
import { imgCredit } from '../data/lists'

class Credits extends React.Component {
  render()
  {
      return (
    <div>
        <h1>Credits</h1>
        <p>This game was thought up and created by Aislyn Keyes, with programming help from JT Wright.</p>
        <h2>Image Credits</h2>
        <ul>
      {imgCredit.map((value, index) => {
        return <li key={index}><img src={`/img/Images/${value.imgFile}`} alt={value.imgCaption}/> <p>{value.imgSource} {value.imgLiscence}</p></li>
      })}
    </ul>
    </div>
        )
        }
    }

export default Credits;