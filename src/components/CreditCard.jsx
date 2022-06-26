import React from 'react';

function CreditCard(props) {
  const divStyle = {
    backgroundColor: `${props.bgColor}`,
    color: `${props.color}`
  };
  const fixedPoint = '.... .... .... .... ';
  return (
    <div style={divStyle} className="credit-card-container">
      <div className="visaImg">
        <img src={props.image} alt="creditCardImg" width="35px" />
      </div>
      <p className="visa-num">{`${fixedPoint}${props.number.slice(-4)}`}</p>
      <div className="visa-details>">
        <p>{`Expires ${props.expirationMonth < 10 ? '0' : ''}${
          props.expirationMonth
        }/${props.expirationYear}      ${props.bank} `}</p>
        <p>{`${props.owner}`}</p>
      </div>
    </div>
  );
}

export default CreditCard;
