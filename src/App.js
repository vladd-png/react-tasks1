import React, { Component } from "react";
import Tasks from "./Ideas";
import Form from "./Form";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      toDoTasks: [
        { id: 1, title: "Frank Sinatra", description: "Fly me to the moon" },
        { id: 2, title: "Sugar Cookies", description: "Pink and White hearts" },
        { id: 3, title: "Kamigawa", description: "Precon and booster box!" },
      ],
      completedTasks: [],
    };
    this.addTask = this.addTask.bind(this);
  }

  addTask = (newTask) => {
    this.setState({ toDoTasks: [...this.state.toDoTasks, newTask] });
  };

  moveTask = (oldTask, id, title, description) => {
    const filteredTasks = this.state.toDoTasks.filter((Task) => Task.id != id);
    this.setState({ toDoTasks: filteredTasks });

    this.setState({ completedTasks: [...this.state.completedTasks, oldTask] });
  };

  deleteTask = (id) => {
    console.log(id);
    const filteredTasks = this.state.toDoTasks.filter((Task) => Task.id != id);

    this.setState({ toDoTasks: filteredTasks });
  };

  render() {
    return (
      <main className="App">
        <h1>Task Manager</h1>
        <h4>Things to Do</h4>
        <Form addTask={this.addTask} />
        {!this.state.toDoTasks.length && <h2>All Done?? Yea Right, Update</h2>}
        <Tasks Tasks={this.state.toDoTasks} moveTask={this.moveTask} />
        <h4>Things Done</h4>
        {!this.state.completedTasks.length && (
          <h2>You Haven't Finished a Task Yet - Get to Work</h2>
        )}
        <Tasks Tasks={this.state.completedTasks} deleteTask={this.deleteTask} />
      </main>
    );
  }
}

export default App;
