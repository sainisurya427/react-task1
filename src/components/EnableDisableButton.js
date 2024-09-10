import React, { useState } from 'react';

function EnableDisableButton() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      <input 
        type="checkbox" 
        onChange={() => setEnabled(!enabled)} 
      />
      <button disabled={!enabled}>Click Me</button>
    </div>
  );
}

export default EnableDisableButton;
