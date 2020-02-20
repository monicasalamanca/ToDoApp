import React from 'react';
import "../App.scss";

class Task extends React.Component {

  render() {
    return (
      <div
        className="todo"
        style={{ textDecoration: this.props.todo.isCompleted ? "line-through" : "" }}
      >
        {this.props.todo.text}
  
        <div>
          <button onClick={() => this.props.completeTodo(this.props.index)}><i className="fas fa-check"></i></button>
          <button onClick={() => this.props.removeTodo(this.props.index)}><i className="far fa-trash-alt"></i></button>
        </div>
      </div>
    );
  }
}

export default Task;