import React, { Component } from 'react';

class Todos extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 2,
        title: 'Feed the birds',
        completed: false
      },
      {
        id: 3,
        title: 'Buy chocolate',
        completed: false
      },
    ]
  }
  render() {
    return (
      <div>
       <h1>Todos</h1>

      </div>
    );
  }
}
export default Todos;
