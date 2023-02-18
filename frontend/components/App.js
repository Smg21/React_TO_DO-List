import React from 'react'

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
        <ul>
          {
            todos.map(todo=>{
              return (<li>{todo.task} {todo.completed?<span>- completed</span> : <span></span>}</li>)
            })
          }
        </ul>

        <form>
          <input />
          <button>Add a Todo</button>
          <button>Clear a Todo</button>
        </form>
      </div>
    )
  }
}
 