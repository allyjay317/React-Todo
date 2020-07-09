import React from 'react'
import { Modal, withStyles, Card, CardContent, TextField, Button, CardActions } from '@material-ui/core'
import { useStyles } from './useStyles'

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
        const { classes } = this.props
        return(
            <Modal
                open={this.props.isOpen}
                onClose={this.props.close}
            >
                <Card className={classes.todoForm}>
                    
                    <CardContent>
                        <form onSubmit={this.handleSubmit}>
                            <TextField 
                                id='standard-required' 
                                label='New Task' 
                                defaultValue='Enter Task Here' 
                                value={this.state.task.task} 
                                name='task' 
                                onChange={this.handleChanges}
                            />
                            <CardActions>
                            <Button size='small' onClick={this.handleSubmit}>Add New Task</Button>
                            </CardActions>
                            
                        </form>
                    </CardContent>
                </Card>
            </Modal>
        )
    }
}

export default withStyles(useStyles)(TodoForm)