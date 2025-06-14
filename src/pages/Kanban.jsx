import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { ThemeContext } from "../context/ThemeContext";

const Kanban = () => {
  const { dark } = React.useContext(ThemeContext);

  const tasks = [
    { id: '1', content: '🎨 Design Homepage' },
    { id: '2', content: '🔐 Implement Login' },
  ];

  return (
    <div className={`kanban-wrapper ${dark ? 'dark' : ''}`}>
      <h2 className="kanban-title">📋 Kanban Board</h2>
      <div className="kanban-card">
        <DragDropContext onDragEnd={() => {}}>
          <Droppable droppableId="tasks">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="kanban-column"
              >
                {tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="kanban-task"
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
        </DragDropContext>
      </div>
    </div>
  );
};

export default Kanban;

