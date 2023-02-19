import React from 'react'
import TodoList from './TodoList';
import Form from './Form';


export default class App extends React.Component {
  constructor(){
    super();
    this.state = {
      todos: [
        {
          task:'Finish Module 19',
          id:1234,
          completed: false
        },
        {
          task:'Vacuum Floors',
          id:2345,
          completed:false
        },
        {
          task:'Put Laundry Away',
          id:3456,
          completed:false
        }
      ]
    }
  }
  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>TODOS</h1>
        <TodoList todos={todos}/>
        <Form />

       
          <button>Clear a Todo</button>
      </div>
    )
  }
}
 


