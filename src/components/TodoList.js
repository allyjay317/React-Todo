// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'
import { Grid } from '@material-ui/core'


class TodoList extends React.Component{
    
    render(){
        return (
            <Grid
                container
                direction='row' 
                justify='center'
                alignItems='center'
                className='todo-list'
                spacing={2}>
                {
                    this.props.data.map(task => {
                        debugger
                        if(this.props.searchText == '' || task.task.toLowerCase().includes(this.props.searchText.toLowerCase())){
                            return <Todo data={task} complete={this.props.complete} />
                        }
                    }
                    )
                }
            </Grid>
        )
    }
}

export default TodoList