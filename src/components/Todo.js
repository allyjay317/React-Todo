import React from 'react'
import { Card, CardContent, Typography, withStyles, CardActions, Button, Grid } from '@material-ui/core'
import { useStyles } from './useStyles'


class Todo extends React.Component {

    onClick = e =>{
        e.preventDefault()
        this.props.complete(this.props.data)
    }
    delete = e =>{
        e.preventDefault()
        this.props.delete(this.props.data)
    }

    render(){
        const { classes } = this.props
        return(
            
            <Grid item xs={12} sm={3}>
                <Card className={classes.todo}>
                    <CardContent>
                        <Typography 
                            variant='h5' 
                            component='h2'
                            className={this.props.data.completed === true ? 
                                `complete` : 
                                ''}
                        >
                            {this.props.data.task}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size='small' onClick={this.onClick}>{this.props.data.completed ? 'Reset' : 'Complete'}</Button>
                        <Button size='small' onClick={this.delete}>Delete Task</Button>
                    </CardActions>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(Todo)