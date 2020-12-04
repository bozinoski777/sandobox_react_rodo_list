import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Header from "./components/layout/Header";
import Todos from './components/Todos';
import About from './components/pages/About';
import AddTodo from './components/AddTodo';
import {v4 as uuidv4} from "uuid";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'Take out the trash',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Feed the birds',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'Buy chocolate',
        completed: false
      }
    ]
  };

delTodo = (id) => {
this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)]})
}

//Add todo
addTodo = (title) => {
  const newTodo = {
    id: uuidv4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}

// Toggle complete
  markComplete = (id) => {
    this.setState({ todos:this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
      })
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
