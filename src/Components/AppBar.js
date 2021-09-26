import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 0 }}
            onClick={() => {
              console.log('clicked'); //function for menu button top app bar
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            FEMA Buyouts by County
          </Typography>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='github'
            sx={{ mr: 0 }}
            target='_blank'
            href='https://github.com/hugoguzman/search-alpha'
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
