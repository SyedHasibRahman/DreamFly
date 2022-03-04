import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import GroupIcon from '@mui/icons-material/Group';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCommentIcon from '@mui/icons-material/AddComment';
import StoreIcon from '@mui/icons-material/Store';

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
            <Link to='' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AccountBoxIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="User Profile" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/AddFlight' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AirplaneTicketIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Add Flight" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManageUsers' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ManageAccountsIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Users" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/AddPackage' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AddBusinessIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Add Package" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManagePackages' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <Inventory2Icon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Packages" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManageOrders' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ShoppingCartIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Orders" />
                </ListItem>
            </Link>

            <Link to='/Dashboard/AddBlog' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AddCommentIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Add Blog" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/ManageBlog' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <StoreIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="Manage Blog" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/makeAdmin' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <StoreIcon style={ {
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