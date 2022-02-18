import React from "react";
import Card from "./Card";
import "./Ideas.css";

const Tasks = ({ Tasks, deleteTask, moveTask }) => {
  const TaskCards = Tasks.map((Task) => {
    return (
      <Card
        title={Task.title}
        description={Task.description}
        id={Task.id}
        key={Task.id}
        deleteTask={deleteTask}
        moveTask={moveTask}
      />
    );
  });

  return <div className="Tasks-container">{TaskCards}</div>;
};

export default Tasks;
