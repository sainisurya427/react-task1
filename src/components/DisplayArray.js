import React from 'react';

function DisplayArray() {
  const records = ['Record 1', 'Record 2', 'Record 3'];

  return (
    <ul>
      {records.map((record, index) => (
        <li key={index}>{record}</li>
      ))}
    </ul>
  );
}

export default DisplayArray;
