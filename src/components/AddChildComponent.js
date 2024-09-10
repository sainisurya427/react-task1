import React, { useState } from 'react';

function AddChildComponent() {
  const [components, setComponents] = useState([]);

  const addComponent = () => {
    setComponents([...components, <ChildComponent key={components.length} />]);
  };

  return (
    <div>
      <button onClick={addComponent}>Add Component</button>
      {components}
    </div>
  );
}

function ChildComponent() {
  return <p>I am a child component!</p>;
}

export default AddChildComponent;
