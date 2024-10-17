"use client";

import Image from "next/image";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import { useRouter } from "next/navigation";
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";

export const Nav = () => {

  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawerWidth = 240;
  const navItems = ['Cadastrar', 'Login'];

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Bolos da Solange
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item}
            disablePadding
            onClick={() => router.push(`/${item.toLowerCase()}`)}
          >
            <ListItemButton
              sx={{ textAlign: 'center' }}
            >
              <ListItemText
                primary={item}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = typeof window !== "undefined" ? () => window.document.body : undefined;

  return (
    <>
      <AppBar
        sx={{
          height: '80px'
        }}
        component="nav"
      >
        <Toolbar
          sx={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            <Image
              fill
              alt="Logo"
              objectFit="contain"
              src={"/assets/icon.png"}
              onClick={() => router.push('/')}
              style={{
                cursor: 'pointer',
              }}
            />
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  color: '#fff'
                }}
                onClick={() => router.push(`/${item.toLowerCase()}`)}
              >
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};
