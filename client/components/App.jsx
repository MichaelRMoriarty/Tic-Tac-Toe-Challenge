import React, { useState } from 'react';
import Board from './Board.jsx';

const App = () => {
  const [turn, setTurn] = useState(1);

  return (
    <div className="game">
      <div className="game-board">
        <Board turn={turn} setTurn={setTurn} />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
    );
}

export default App;