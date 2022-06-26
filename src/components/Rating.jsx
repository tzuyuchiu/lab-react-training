import React from 'react';

function Rating(props) {
  let point = '';
  if (Math.round(props.children) === 0) {
    point = '☆☆☆☆☆';
  }
  if (Math.round(props.children) === 1) {
    point = '★☆☆☆☆';
  }
  if (Math.round(props.children) === 2) {
    point = '★★☆☆☆';
  }
  if (Math.round(props.children) === 3) {
    point = '★★★☆☆';
  }
  if (Math.round(props.children) === 4) {
    point = '★★★★☆';
  }
  if (Math.round(props.children) === 5) {
    point = '★★★★★';
  }
  console.log(point);
  return (
    <div className="star-container">
      <p className="rating-star">{`${point}`}</p>
    </div>
  );
}

export default Rating;
