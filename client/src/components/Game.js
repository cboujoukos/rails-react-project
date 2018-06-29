import React, { Component } from 'react';
import Letter from './Letter';
import Timer from './Timer';

class Game extends Component{
  render(){
    return(
      <div className="game-board">
        <div className="target-word">
          <Letter letter="M" />
          <Letter letter="A" />
          <Letter letter="J" />
          <Letter letter="O" />
          <Letter letter="R" />
        </div>
        <input type="text" className="answer" />
        <div className="game-footer">
          <Timer />
          <div className="start-button">
            <button>Start</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Game
