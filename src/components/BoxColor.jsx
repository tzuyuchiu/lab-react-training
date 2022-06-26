import React, { useState } from 'react';

function BoxColor(props) {
  const divStyle = {
    backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`
  };

  return (
    <div>
      <div style={divStyle} className="boxColor">
        <p className="boxColor-text">{`rgb(${props.r}, ${props.g}, ${props.b})`}</p>
      </div>
    </div>
  );
}

export default BoxColor;
