import React, { Component } from 'react';
import TodoList from './TodoList';
import Form from './Form';
import CurrentTime from './CurrentTime';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedDay: 'Sunday',
      daysOfWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      todos: {
        Sunday: [],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
      },
    };
  }

  handleAdd = (task) => {
    const { selectedDay, todos } = this.state;
    const newTodo = {
      task: task,
      id: Date.now(),
      completed: false,
    };

    this.setState({
      todos: {
        ...todos,
        [selectedDay]: [...todos[selectedDay], newTodo],
      },
    });
  };

  handleClear = () => {
    const { selectedDay, todos } = this.state;

    this.setState({
      todos: {
        ...todos,
        [selectedDay]: todos[selectedDay].filter((todo) => !todo.completed),
      },
    });
  };

  handleToggle = (clickedId) => {
    const { selectedDay, todos } = this.state;

    this.setState({
      todos: {
        ...todos,
        [selectedDay]: todos[selectedDay].map((todo) => {
          if (todo.id === clickedId) {
            return {
              ...todo,
              completed: !todo.completed,
            };
          }
          return todo;
        }),
      },
    });
  };

  handleDayChange = (day) => {
    this.setState({
      selectedDay: day,
    });
  };

  render() {
    const { selectedDay, daysOfWeek, todos } = this.state;
    return (
      <div>
        <h1>TODOS</h1>
        <div>
          {daysOfWeek.map((day) => (
            <button
              key={day}
              onClick={() => this.handleDayChange(day)}
              className={day === selectedDay ? 'active-day' : ''}
            >
              {day}
            </button>
          ))}
        </div>
        <TodoList handleToggle={this.handleToggle} todos={todos[selectedDay]} />
        <Form handleAdd={this.handleAdd} />
        <button onClick={this.handleClear}>Clear Completed Todo Tasks</button>
        <CurrentTime />
      </div>
    );
  }
}
