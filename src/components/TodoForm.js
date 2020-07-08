import React from 'react'

class TodoForm extends React.Component{
    constructor(props){
        super()
        this.state = {
            task: 'this',
        }
    }

    handleChanges = e =>{
        this.setState({task: e.target.value})
    }

    handleSubmit = e=> {
        e.preventDefault()
        this.props.submit(this.state.task)
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>New Task</label>
                    <input onChange={this.handleChanges} value={this.state.task} type='text' id='task' name='task' />
                    <button type='submit' onClick={this.handleSubmit}>Add New Task</button>
                    
                </form>
                <button type='submit' onClick={this.props.clear}>Clear Completed Tasks</button>
            </div>
        )
    }
}

export default TodoForm