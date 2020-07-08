import React from 'react'
import { Modal } from '@material-ui/core'

class TodoForm extends React.Component{
    constructor(props){
        super()
        this.state = {
            task: {
                task: ''
            },
        }
    }

    

    handleChanges = e =>{
        this.setState({task: {
            [e.target.name]: e.target.value
        }})
    }

    handleSubmit = e=> {
        e.preventDefault()
        this.props.submit(this.state.task)
        this.setState({task: {
            task: ''
        }})
        this.props.close()
    }

    render(){
        return(
            <Modal
                open={this.props.isOpen}
                onClose={this.props.close}
            >
                <div style={{
                    position: 'absolute',
                    width: 400,
                    backgroundColor: 'whitesmoke',
                    border: '2px solid #000',
                    padding: '10px',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='task'>New Task</label>
                    <input onChange={this.handleChanges} value={this.state.task.task} type='text' id='task' name='task' />
                    <button type='submit' onClick={this.handleSubmit}>Add New Task</button>
                    
                </form>
                </div>
            </Modal>
        )
    }
}

export default TodoForm