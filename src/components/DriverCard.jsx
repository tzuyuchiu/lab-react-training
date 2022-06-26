import React from 'react';

function DriverCard(props) {
  let point = '';
  if (Math.round(props.rating) === 0) {
    point = '☆☆☆☆☆';
  }
  if (Math.round(props.rating) === 1) {
    point = '★☆☆☆☆';
  }
  if (Math.round(props.rating) === 2) {
    point = '★★☆☆☆';
  }
  if (Math.round(props.rating) === 3) {
    point = '★★★☆☆';
  }
  if (Math.round(props.rating) === 4) {
    point = '★★★★☆';
  }
  if (Math.round(props.rating) === 5) {
    point = '★★★★★';
  }
  console.log(props);
  return (
    <div className="driver-card-container">
      <div>
        <img src={props.img} alt="driverCardImg" className="driver-image" />
      </div>
      <div className="driver-text">
        <p className="driver-name">{`${props.name}`}</p>
        <p className="driver-star">{`${point}`}</p>
        <p>{`${props.car.model} - ${props.car.licensePlate}`}</p>
      </div>
    </div>
  );
}

export default DriverCard;
