import {
  AppBar,
  Avatar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";
import logo from "../../../images/Logo5.png";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Navigation = () => {
  const { user, logOut } = useAuth({});

  const pages = [
    "Home",
    "Services",
    "About",
    "Contact",
    "Blogs",
    "Courses",
  ];
  const settings = ["Profile", "Account", "Dashboard"];
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
      <AppBar
        position="sticky"
        sx={{
          background: "linear-gradient(90deg, #5e35b1, #5e35b1)",
          py: "5px"
        }}
      >
        <Container>
          <Toolbar disableGutters sx={{ p: 0, m: 0 }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
            >
              <Link to="/">
                <img src={logo} width="200px" alt="logo" />
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }, }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} sx={{py: 0, my: 0}} onClick={handleCloseNavMenu}>
                    <Typography sx={{ fontWeight: 600, py: "0 !important", my: 0 }}>
                      <Link
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: 400,
                        }}
                        to={`/${page}`}
                        >
                        {page}
                      </Link>
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
            >
              <img src={logo} width="150px" alt="logo" />
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: { md: "flex-end" },
              }}
            >
              {pages.map((page) => (
                <Typography
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ ml: 2, color: "white", display: "block" }}
                >
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "white",
                      fontWeight: 400,
                    }}
                    to={`/${page}`}
                  >
                    {page}
                  </Link>
                </Typography>
              ))}
            </Box>

            <Box
              sx={{
                flexGrow: 0,
              }}
            >
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu}>
                  {/* <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" /> */}
                  <Avatar alt="User Photo" src={user?.photoURL} />
                </IconButton>
              </Tooltip>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    {/* <Typography textAlign="center">{ setting }</Typography> */}
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: 600,
                      }}
                      to={`/${setting}`}
                    >
                      {setting}
                    </Link>
                  </MenuItem>
                ))}
                <MenuItem>
                  {user.email ? (
                    <Typography
                      sx={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: 600,
                      }}
                      onClick={logOut}>
                      LogOut
                    </Typography>
                  ) : (
                    <Link
                      style={{
                        textDecoration: "none",
                        color: "black",
                        fontWeight: 600,
                      }}
                      to="/SignIn"
                    >
                      SignIn
                    </Link>
                  )}
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
