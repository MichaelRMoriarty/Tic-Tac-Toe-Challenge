import React, { useState } from 'react';

const Square = ({ turn, setTurn }) => {
  const [ value, setValue ] = useState('');

  const clickHandler = (e) => {
    setValue(turn === 1 ? 'X' : 'O')

  }
    return (
      <button className="square" onClick={clickHandler}>
        {value}
      </button>
    );
}

export default Square;
