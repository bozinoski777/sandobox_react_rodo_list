import React, { Component } from 'react';
import TodoItem from './TodoItem';

class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} />
    ));
  }
}
export default Todos;
https://www.youtube.com/watch?v=sBws8MSXN7A&ab_channel=TraversyMedia 33min
