import React, { useState } from 'react';

function ShowHideElement() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Element
      </button>
      {visible && <p>This element is visible</p>}
    </div>
  );
}

export default ShowHideElement;
