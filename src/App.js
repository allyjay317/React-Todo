import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './components/Todo.css'
import TodoAppBar from './components/TodoAppBar.jsx';
import { Fab, Container } from '@material-ui/core';

import ActionButtons from './components/ActionButtons';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(props){
    super()
      let tasks = JSON.parse(window.localStorage.getItem('tasks'))
      let completedTasks = JSON.parse(window.localStorage.getItem('completedTasks'))
      
      this.state = {
        tasks: tasks === null ? [] : tasks,
        addOpen: false,
        completedTasks: completedTasks === null ? [] : completedTasks
    }
    
  }


  createNewTask = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks, 
        {...task, id: Date.now(), completed: false}]})
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

  handleModal = (bool) =>{
    this.setState({addOpen: bool})
  }

  componentDidUpdate = () => {
    window.localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    window.localStorage.setItem('completedTasks', JSON.stringify(this.state.completedTasks))
  }

  clearCompleted = (e) => {
    e.preventDefault()
    const newTasks = this.state.tasks.filter((task) => task.completed !== true)
    const completedTasks = this.state.tasks.filter((task) => task.completed === true)
    this.setState({tasks: newTasks, completedTasks: [...this.state.completedTasks, ...completedTasks]})
    
  }

  render() {
    return (
      <div key='root'>
        <TodoAppBar />
        <Container style={{marginTop: '100px'}}>
          <TodoForm isOpen={this.state.addOpen} change={this.handleChanges} submit={this.createNewTask} clear={this.clearCompleted} close={()=> this.handleModal(false)}/>
          <TodoList data={this.state.tasks} complete={this.complete} />
        </Container>
        <ActionButtons add={() => this.handleModal(true)} clear={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;