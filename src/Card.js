import React from "react";
import "./Card.css";

const Card = ({ title, description, id, deleteTask, moveTask }) => {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button onClick={() => deleteTask(id)}>🗑</button>
      <button onClick={() => moveTask({ title, description }, id)}>Move</button>
    </div>
  );
};

export default Card;
