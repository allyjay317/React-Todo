import React from 'react'
import { AppBar, Toolbar, IconButton, Drawer, ListItem, List, ListItemText, ListItemIcon, withStyles, InputBase } from '@material-ui/core'
import Typeography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import { withRouter } from 'react-router-dom'
import { useStyles } from './useStyles'
import SearchIcon from '@material-ui/icons/Search'

class TodoAppBar extends React.Component {

    constructor(){
        super()
        this.state = {
            drawerOpen: false
        }
    }

    
    
    render(){
        const { history, classes } = this.props
    return (
        
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu' onClick={()=> this.setState({drawerOpen:true})}>
                        <MenuIcon />
                    </IconButton>
                    <Typeography variant='h6' style={{flexGrow: 1}}>
                        Todo
                    </Typeography>
                    <div className={classes.search}>
                        <div className={classes.searchIcon}>
                        <SearchIcon />
                        </div>
                        <InputBase
                        placeholder="Search…"
                        classes={{
                            root: classes.inputRoot,
                            input: classes.inputInput,
                        }}
                        inputProps={{ 'aria-label': 'search' }}
                        value={this.props.searchText}
                        onChange={this.props.handleSearch}
                        />
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={this.state.drawerOpen}
                onClose={()=> this.setState({drawerOpen: false})}
            >
                <List>
                    <ListItem button onClick={() => {
                            history.push('/')
                            this.setState({drawerOpen:false})
                        }}>
                        <ListItemIcon>
                            <AssignmentLateIcon />
                        </ListItemIcon>
                        <ListItemText primary='Uncompleted Tasks' />
                    </ListItem>
                    <ListItem button onClick={() => {
                            history.push('/complete')
                            this.setState({drawerOpen:false})
                        }}>
                        <ListItemIcon>
                            <AssignmentTurnedInIcon />
                        </ListItemIcon>
                        <ListItemText primary='Completed Tasks' />
                    </ListItem>
                </List>


            </Drawer>
        </div>
    )
                    }
}

export default withRouter(withStyles(useStyles)(TodoAppBar))