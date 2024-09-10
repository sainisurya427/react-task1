import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './TaskList.css';

const initialTasks = Array.from({ length: 10 }, (v, k) => ({
  id: `task-${k + 1}`,
  content: `Test Task ${k + 1}`
}));

const initialColumns = {
  today: {
    name: "Today",
    tasks: []
  },
  tomorrow: {
    name: "Tomorrow",
    tasks: []
  },
  thisWeek: {
    name: "This Week",
    tasks: []
  },
  nextWeek: {
    name: "Next Week",
    tasks: []
  },
  unplanned: {
    name: "Unplanned",
    tasks: initialTasks
  }
};

function TaskList() {
  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = (result) => {
    const { source, destination } = result;

    // Dropped outside the list
    if (!destination) return;

    // Get source and destination columns
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];

    // Copy the task being moved
    const sourceTasks = [...sourceColumn.tasks];
    const [movedTask] = sourceTasks.splice(source.index, 1);

    // Copy destination tasks and add the moved task
    const destTasks = [...destColumn.tasks];
    destTasks.splice(destination.index, 0, movedTask);

    // Update state
    setColumns({
      ...columns,
      [source.droppableId]: { ...sourceColumn, tasks: sourceTasks },
      [destination.droppableId]: { ...destColumn, tasks: destTasks }
    });
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="task-list-container">
        {Object.entries(columns).map(([columnId, column]) => (
          <Droppable key={columnId} droppableId={columnId}>
            {(provided, snapshot) => (
              <div
                className={`task-block ${snapshot.isDraggingOver ? "dragging-over" : ""}`}
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <h2>{column.name}</h2>
                {column.tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        className={`task ${snapshot.isDragging ? "dragging" : ""}`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {task.content}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}

export default TaskList;
