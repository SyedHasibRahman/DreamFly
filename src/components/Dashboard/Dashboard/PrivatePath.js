import React from 'react'; import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const PrivatePath = () => {
    return (
        <div>
            <Link className='link-td-none' to='/' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon >
                        <HomeIcon  
                            sx={{
                                '& > :not(style)': {color: "white"}
                            }}    
                        />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{color: "white"}} 
                        primary="Home" 
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AccountBoxIcon 
                            sx={{
                                '& > :not(style)': {color: "white"}
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{color: "white"}} 
                        primary="User Profile" 
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='UserOrder' primary="Test Primary" >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ShoppingBasketIcon 
                            sx={{
                                '& > :not(style)': {color: "white"}
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{color: "white"}} 
                        primary="User Order" 
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to="UserCourse" primary="Test Primary" >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <LocalLibraryIcon 
                            sx={{
                                '& > :not(style)': {color: "white"}
                            }}
                        />
                    </ListItemIcon>
                    <ListItemText 
                        primaryTypographyProps={{color: "white"}} 
                        primary="User Course" 
                    />
                </ListItem>
            </Link>

        </div>
    );
};

export default PrivatePath;