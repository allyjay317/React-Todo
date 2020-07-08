// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component{


    
    render(){
        return (
            <div className='todo-list'>
                {this.props.data.map(task => <Todo data={task} complete={this.props.complete} />)}
            </div>
        )
    }
}

export default TodoList