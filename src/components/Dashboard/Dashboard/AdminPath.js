import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const AdminPath = () => {
    return (
        <div>
            <Link to='/' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItem>
            </Link>

            <Link to='/Dashboard/AddFlight' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Add Flight" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManageUsers' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Users" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/AddPackage' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Add Package" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManagePackages' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Packages" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManageOrders' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Orders" />
                </ListItem>
            </Link>

            <Link to='/Dashboard/AddBlog' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Add Blog" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManageBlog' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Blog" />
                </ListItem>
            </Link>

        </div>
    );
};

export default AdminPath;