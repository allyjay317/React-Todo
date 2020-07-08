import React from 'react'
import { Container } from '@material-ui/core'
import { Route } from 'react-router-dom'
import TodoList from './TodoList'
import ActionButtons from './ActionButtons'

class TodoContainer extends React.Component{

    render(){
        return(
            <Container style={{marginTop: '100px'}}>  
                <Route exact path='/'>
                    <TodoList data={this.props.tasks} complete={this.props.complete} searchText={this.props.searchText}/>
                    <ActionButtons add={() => this.props.show(true)} clear={this.props.clear}/>
                </Route>
                <Route path='/complete'>
                    <TodoList data={this.props.completed} complete={this.props.complete}  searchText={this.props.searchText}/>
                </Route>
            </Container>
        )
    }
}

export default TodoContainer