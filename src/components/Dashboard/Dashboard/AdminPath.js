import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddCommentIcon from '@mui/icons-material/AddComment';
import StoreIcon from '@mui/icons-material/Store';
import BarChartIcon from '@mui/icons-material/BarChart';

const AdminPath = () => {
    return (
        <div>
            <Link className='link-td-none' to='/' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <HomeIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="Home" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AccountBoxIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="User Profile" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/PriceChart' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <BarChartIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="PriceChart" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/AddFlight' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AirplaneTicketIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="Add Flight" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/ManageUsers' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ManageAccountsIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="Manage Users" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/AddPackage' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AddBusinessIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="Add Package" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/ManagePackages' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <Inventory2Icon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="Manage Packages" />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/ManageOrders' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <ShoppingCartIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={ { color: "white" } } primary="Manage Orders" />
                </ListItem>
            </Link>

            <Link className='link-td-none' to='/Dashboard/AddBlog' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <AddCommentIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText
                        primaryTypographyProps={ { color: "white" } }
                        primary="Add Blog"
                    />
                </ListItem>
            </Link>
            <Link className='link-td-none' to='/Dashboard/MakeAdmin' >
                <ListItem button key="Test" primary="Test Primary"  >
                    <ListItemIcon>
                        <StoreIcon
                            sx={ { '& > :not(style)': { color: "white" } } }
                        />
                    </ListItemIcon>
                    <ListItemText
                        primary="Manage Blog"
                        primaryTypographyProps={ { color: "white" } }
                    />
                </ListItem>
            </Link>

        </div>
    );
};

export default AdminPath;