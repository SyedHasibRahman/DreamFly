import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import logo from '../../../images/Logo7.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
  const { user, logOut } = useAuth({})

  const pages = ['Home', 'Services', 'AboutUs', 'OurPilots', 'ContactUs', 'Blogs'];
  const settings = ['Profile', 'Account', 'Dashboard'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
 
  return (
    <>
      {/* background: 'linear-gradient(90deg, #93FFD8, #CFFFDC) */ }
      {/* background: 'linear-gradient(90deg, #99FEFF, #94DAFF)' */ }
      <AppBar position="static" sx={ {
        background: 'linear-gradient(90deg, #94DAFF, #64DFDF)', py: "10px",
      } }>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={ { mr: 2, display: { xs: "none", md: "flex" } } }
            >
              <Link to="/"><img src={ logo } width='200px' alt="logo" /></Link>
            </Typography>

            <Box sx={ { flexGrow: 1, display: { xs: "flex", md: "none" } } }>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={ handleOpenNavMenu }
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={ anchorElNav }
                anchorOrigin={ {
                  vertical: "bottom",
                  horizontal: "left",
                } }
                keepMounted
                transformOrigin={ {
                  vertical: "top",
                  horizontal: "left",
                } }
                open={ Boolean(anchorElNav) }
                onClose={ handleCloseNavMenu }
                sx={ {
                  display: { xs: "block", md: "none" },
                } }
              >
                { pages.map((page) => (
                  <MenuItem key={ page } onClick={ handleCloseNavMenu }>
                    <Typography sx={{color: 'white'}}>{ page }</Typography>
                  </MenuItem>
                )) }
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={ { flexGrow: 1, display: { xs: "flex", md: "none" } } }
            >
              <img src={ logo } width="200px" alt="logo" />
            </Typography>
            <Box
              sx={ {
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "flex-end" },
              } }
            >
              { pages.map((page) => (
                <Typography
                  key={ page }
                  onClick={ handleCloseNavMenu }
                  sx={ { ml: 2, color: "white", display: "block" } }
                >
                  <Link style={ {
                    textDecoration: 'none',
                    color: 'black',
                    fontWeight: 400,

                    background: '-webkit-linear-gradient(90deg, crimson, #673AB7)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'

                  } } to={ `/${page}` }>{ page }</Link>
                </Typography>
              )) }
            </Box>

            <Box
              sx={ {
                flexGrow: 0,
              } }
            >
              <Tooltip title="Open settings" sx={ { ml: 5 } }>
                <IconButton onClick={ handleOpenUserMenu }>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */ }
                  <Avatar alt="Remy Sharp" src={ user?.photoURL } />
                </IconButton>
              </Tooltip>
              <Menu
                sx={ { mt: "45px" } }
                id="menu-appbar"
                anchorEl={ anchorElUser }
                anchorOrigin={ {
                  vertical: "top",
                  horizontal: "right",
                } }
                keepMounted
                transformOrigin={ {
                  vertical: "top",
                  horizontal: "right",
                } }
                open={ Boolean(anchorElUser) }
                onClose={ handleCloseUserMenu }
              >
                { settings.map((setting) => (
                  <MenuItem key={ setting } onClick={ handleCloseUserMenu }>
                    {/* <Typography textAlign="center">{ setting }</Typography> */ }
                    <Link style={ {
                      textDecoration: 'none',
                      color: 'black',
                      fontWeight: 600

                    } } to={ `/${setting}` }>{ setting }</Link>


                  </MenuItem>
                )) }
                <MenuItem>
                  {
                    user.email ?
                      <Button onClick={ logOut } color="inherit">LogOut</Button>
                      :
                      <Link style={ {
                        textDecoration: 'none',
                        color: 'black',
                        fontWeight: 600

                      } } to="/SignIn">SignIn</Link>
                  }
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Navigation;
