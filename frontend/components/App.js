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

  //Submit handle Event
  handleAdd = (task)=> {

      const newTodo = {
        task: task,
        id: Date.now(),
        completed:false
      };

    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo]

    });
  }


  //Clear Handle (Dont mess with below as it all works)
  handleClear = ()=> {
    //console.log("clear clicked");
    
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => {
        return(todo.completed === false);
      })
    });
  }

  //inserting new event for todo
  handleToggle = () => {
    const id = 1234;

    this.setState({
      ...this.state,
      todos: this.state.todos.map(todo => {
        if (todo.id === clickedId){
          return{
            ...todo,
            completed: !todo.completed
          }
        }
          return todo;
        
      })
    });


  }


  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>TODOS</h1>
        <TodoList todos={todos}/>
        <Form handleAdd={this.handleAdd}/>
          <button onClick={this.handleClear}>Clear Completed Todo Tasks</button>
      </div>
    )
  }
}