import React from 'react';
import TodoForm from './components/TodoForm';
import './components/Todo.css'
import TodoAppBar from './components/TodoAppBar.jsx';
import TodoContainer from './components/TodoContainer';

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
        completedTasks: completedTasks === null ? [] : completedTasks,
        searchText: '',
    }
    
  }


  createNewTask = (task) => {
    this.setState({
      tasks: [
        ...this.state.tasks, 
        {...task, id: Date.now(), completed: false}]})
  }

  complete = (task) => {
    debugger
    let completed = this.state.completedTasks.find(t => t.id === task.id)
    if(completed === undefined){
      this.setState({
        tasks: this.state.tasks.map((t) => 
          t.id === task.id ? 
            {...t, completed: !t.completed} : 
            {...t} 
          )
      })
    }
    else{
      this.setState({
        tasks: [
          ...this.state.tasks,
          {
            ...task,
            completed: !task.completed
          }
        ],
        completedTasks: this.state.completedTasks.filter(t => t.id !== task.id)
      })
    }
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

  handleSearch = e =>{
        this.setState({searchText: e.target.value})
  }

  render() {
    return (
      <div key='root'>
        <TodoAppBar searchText={this.state.searchText} handleSearch={this.handleSearch}/>
        <TodoForm isOpen={this.state.addOpen} change={this.handleChanges} submit={this.createNewTask} clear={this.clearCompleted} close={()=> this.handleModal(false)}/>
        <TodoContainer 
          tasks={this.state.tasks} 
          complete={this.complete} 
          show={this.handleModal} 
          clear={this.clearCompleted} 
          completed={this.state.completedTasks}
          searchText={this.state.searchText} />
        
      </div>
    );
  }
}

export default App;