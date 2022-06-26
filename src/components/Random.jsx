import React from 'react';

function Random(props) {
  const randomNum = Math.floor(
    Math.random() * (props.max - props.min + 1) + props.min
  );
  return (
    <div className="random-number">
      <p className="random-text">{`Random value between ${props.min} and ${props.max} => ${randomNum}`}</p>
    </div>
  );
}

export default Random;
