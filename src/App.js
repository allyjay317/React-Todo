import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super()
    debugger
      let data = JSON.parse(window.localStorage.getItem('tasks'))
      this.state = {
        tasks: data === null ? [{
          task: 'do the dishes',
          id: 15,
          completed: false,
        }] : data
      
    }
    
  }


  createNewTask = (task) => {
    this.setState({...this.state, tasks: [...this.state.tasks, {task: task, id: Date.now(), completed: false}]})
  }

  complete = (task) => {
    this.setState({
      tasks: this.state.tasks.map((t) => 
        t.id === task.id ? 
          {...t, completed: !t.completed} : 
          {...t} 
        )
    })
  }

  componentDidUpdate = () => {
    debugger
    window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  clearCompleted = (e) => {
    debugger
    e.preventDefault()
    this.setState({tasks: this.state.tasks.filter((task) => task.completed !== true)})
  }

  render() {
    return (
      <div>
        <TodoForm change={this.handleChanges} submit={this.createNewTask} clear={this.clearCompleted}/>
        <TodoList data={this.state.tasks} complete={this.complete} />
      </div>
    );
  }
}

export default App;