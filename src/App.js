import React from 'react';
import SimpleJSX from './components/SimpleJSX';
import DisplayArray from './components/DisplayArray';
import ShowHideElement from './components/ShowHideElement';
import EnableDisableButton from './components/EnableDisableButton';
import TwoWayBinding from './components/TwoWayBinding';
import AddChildComponent from './components/AddChildComponent';
import SumOfTwoNumbers from './components/SumOfTwoNumbers';
import Counter from './components/Counter';
import SearchFilter from './components/SearchFilter';
import DataGridComponent from './components/DataGridComponent';
import TaskList from './components/TaskList';

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
      <Counter />
      <SearchFilter />
      <DataGridComponent />
      <h1>Task List with Drag and Drop</h1>
      <TaskList/>
    </div>
  );
}

export default App;
