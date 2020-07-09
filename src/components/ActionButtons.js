import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from './useStyles'
import { Fab, Grid } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ClearAllIcon from '@material-ui/icons/ClearAll'

class BottomButtons extends React.Component{
    render(){
        const { classes } = this.props
        return(
            <Grid
                container
                direction='row' 
                justify='flex-end'
                alignItems='center'
                spacing={3}
                className={classes.ActionButtons}
            >
                <Grid item>
                <Fab color='primary' aria-label='add'  onClick={this.props.add}>
                    <AddIcon />
                </Fab>
                </Grid>
                <Grid item>
                <Fab color='primary' aria-label='clear' onClick={this.props.clear}>
                    <ClearAllIcon />
                </Fab>
                </Grid>
            </Grid>
        )
    }
}

export default withStyles(useStyles)(BottomButtons)