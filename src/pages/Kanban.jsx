import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const Kanban = () => {
  const tasks = [
    { id: '1', content: 'Design Homepage' },
    { id: '2', content: 'Implement Login' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={() => {}}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {tasks.map((task, index) => (
                <Draggable draggableId={task.id} index={index} key={task.id}>
                  {(provided) => (
                    <div
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      ref={provided.innerRef}
                      className="bg-white p-3 rounded shadow mb-2"
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
  );
};

export default Kanban;

