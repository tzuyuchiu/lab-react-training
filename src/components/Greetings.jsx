import React from 'react';

function Greetings(props) {
  let result = '';
  if (props.lang === 'en') {
    result = 'Hello';
  }
  if (props.lang === 'fr') {
    result = 'Bonjour';
  }
  if (props.lang === 'de') {
    result = 'Hallo';
  }
  if (props.lang === 'es') {
    result = 'Hola';
  }
  return (
    <div className="greetings">
      {<p className="greeting-text">{`${result} ${props.children}`}</p>}
    </div>
  );
}

export default Greetings;
