import { AppBar, Toolbar, Container,Typography, IconButton, Button, useMediaQuery, Box, Drawer, List, ListItem, ListItemText, CardMedia } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import LogoBlack from '../media/images/logo.png';  // Replace this path with the actual path to your image
import { Link } from 'react-router-dom';


export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'secondary.main',  px: 7 }}>
        {/* <Container maxWidth="xl"> */}
            <Toolbar>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                <Box display="flex" alignItems="flex-start" sx={{ width: '100px' /* adjust this */ }}>
                <CardMedia
                        component="img"
                        image={LogoBlack}
                        height="auto"
                        alt="Banner Image"
                        sx={{ objectFit: 'contain' }}
                    />{/* replace with your actual logo */}
                <Typography variant="h6" component="div">
                    Board Visualizer Tool
                </Typography>
                </Box>
                </Link>
                <Box sx={{ flexGrow: 1 }} /> 
                {isMobile ? (
                <>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={handleDrawerOpen}>
                    <MenuIcon />
                    </IconButton>
                    <Drawer anchor='right' open={drawerOpen} onClose={handleDrawerClose}>
                    <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={handleDrawerClose}
                        onKeyDown={handleDrawerClose}
                    >
                        <List>
                        <ListItem button>
                            <ListItemText primary="Item 1" />
                        </ListItem>
                        <ListItem button>
                            <ListItemText primary="Item 2" />
                        </ListItem>
                        {/* Add as many ListItems as you need */}
                        </List>
                    </Box>
                    </Drawer>
                </>
                ) : (
                <>
                    {/* <Button color="inherit">About us</Button>
                    <Button color="inherit">Services</Button>
                    <Button color="inherit">Usecases</Button>
                    <Button color="inherit">Blog</Button> */}
                    {/* Add as many Buttons as you need */}
                </>
                )}
            </Toolbar>
        {/* </Container> */}
    </AppBar>
  );
        }