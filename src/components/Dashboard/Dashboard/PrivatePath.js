import React from 'react'; import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const PrivatePath = () => {
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
            <Link to='Dashboard/UserProfile' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AccountBoxIcon style={ {
                            color: 'white'
                        } } />
                    </ListItemIcon>
                    <ListItemText primary="User Profile" />
                </ListItem>
            </Link>
            <Link to='/Dashboard/UserOrder' primary="Test Primary" >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ShoppingBasketIcon sx={ { color: 'red' } } />
                    </ListItemIcon>
                    <ListItemText primary="User Order" />
                </ListItem>
            </Link>
            <Link to="/Dashboard/UserCourse" primary="Test Primary" >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <LocalLibraryIcon />
                    </ListItemIcon>
                    <ListItemText primary="User Course" />
                </ListItem>
            </Link>
        </div>
    );
};

export default PrivatePath;