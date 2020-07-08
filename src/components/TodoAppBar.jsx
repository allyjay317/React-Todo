import React from 'react'
import { AppBar, Toolbar, IconButton, Drawer, ListItem, List, ListItemText, ListItemIcon } from '@material-ui/core'
import Typeography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import { useState } from 'react'
import AssignmentLateIcon from '@material-ui/icons/AssignmentLate';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

function TodoAppBar(props) {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <div>
            <AppBar>
                <Toolbar>
                    <IconButton edge='start' color='inherit' aria-label='menu' onClick={()=> setDrawerOpen(true)}>
                        <MenuIcon />
                    </IconButton>
                    <Typeography variant='h6' style={{flexGrow: 1}}>
                        Todo
                    </Typeography>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={()=> setDrawerOpen(false)}
            >
                <List>
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentLateIcon />
                        </ListItemIcon>
                        <ListItemText primary='Uncompleted Tasks' />
                    </ListItem>
                    <ListItem button>
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

export default TodoAppBar