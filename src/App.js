import React from 'react';
import SimpleJSX from './components/SimpleJSX';
import DisplayArray from './components/DisplayArray';
import ShowHideElement from './components/ShowHideElement';
import EnableDisableButton from './components/EnableDisableButton';
import TwoWayBinding from './components/TwoWayBinding';
import AddChildComponent from './components/AddChildComponent';
import SumOfTwoNumbers from './components/SumOfTwoNumbers';

function App() {
  return (
    <div className="App">
      <h1>React Learning Tasks</h1>
      <SimpleJSX />
      <DisplayArray />
      <ShowHideElement />
      <EnableDisableButton />
      <TwoWayBinding />
      <AddChildComponent />
      <SumOfTwoNumbers />
    </div>
  );
}

export default App;
