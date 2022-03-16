import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Avatar, Button } from '@mui/material';
import { Outlet } from 'react-router-dom';
import AdminPath from './AdminPath';
import PrivatePath from './PrivatePath';
import useAuth from '../../../hooks/useAuth';

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(9)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

const Dashboard = () => {
    const { user, admin, logOut } = useAuth()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <Box sx={ { display: 'flex' } }>
            <CssBaseline />
            <AppBar position="fixed" open={ open } sx={ {
                backgroundColor: '#5E35B1 !important'
            } }>
                <Toolbar>
                    <IconButton
                        aria-label="open drawer"
                        onClick={ handleDrawerOpen }
                        edge="start"
                        sx={ {
                            marginRight: '36px',
                            ...(open && { display: 'none' }),
                        } }
                    >
                        <MenuIcon 
                            sx={{
                                '& > :not(style)': {color: "white"}
                            }}
                        />
                    </IconButton>
                    <Box sx={ {
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '93%'
                    } }>
                        <Typography 
                            variant="h6" 
                            noWrap 
                            component="div"
                            sx={ {color: "white !important"} }
                            >
                            { user.displayName || user?.email }
                        </Typography>
                        <Box sx={ {
                            display: 'flex',
                        } }>
                            { user.email &&
                                <Button
                                    sx={ {
                                        textDecoration: "none",
                                        color: "white !important",
                                        fontWeight: 600,
                                    } }
                                    onClick={ logOut }>
                                    LogOut
                                </Button>
                            }
                            <Avatar alt="Travis Howard" src={ user?.photoURL } />
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Drawer variant="permanent" open={ open } sx={ {
                backgroundColor: '#5E35B1 !important'
            } }>
                <DrawerHeader sx={ {
                    backgroundColor: '#5E35B1 !important'
                } }>
                    <IconButton onClick={ handleDrawerClose }>
                        {/* <ChevronLeftIcon /> */ }
                        { theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon sx={{
                                '& > :not(style)': {color: "white"}
                            }} /> }
                    </IconButton>
                </DrawerHeader>
                <Divider />
                { admin ?
                    <List sx={ {
                        backgroundColor: '#5E35B1 !important',
                        height: '100%',
                        color: 'white !important'
                    } }>

                        <AdminPath />

                    </List>
                    :
                    <List sx={ {
                        backgroundColor: '#5E35B1 !important',
                        height: '100%',
                        color: 'white !important'
                    } }>

                        <PrivatePath />

                    </List>
                }

            </Drawer>
            <Box component="main" sx={ { flexGrow: 1, p: 3 } }>
                <DrawerHeader />
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;