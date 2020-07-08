import React from 'react'

class Todo extends React.Component {

    onClick = e =>{
        this.props.complete(this.props.data)
    }

    render(){
        return(
            <div>
                <h1 onClick={this.onClick} className={this.props.data.completed === true ? 'complete' : ''}>{this.props.data.task}</h1>
            </div>
        )
    }

}

export default Todo