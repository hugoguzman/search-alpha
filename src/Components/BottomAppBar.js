import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar>
          {/* <IconButton color='inherit' aria-label='open drawer'>
          </IconButton> */}
          {/* <StyledFab color='secondary' aria-label='add'>
            <AddIcon />
          </StyledFab> */}
          <Box sx={{ flexGrow: 1 }} />
          {/* <IconButton color='inherit'>
            <SearchIcon />
          </IconButton> */}
          <IconButton
            color='inherit'
            onClick={() => {
              console.log('clicked'); //function for more button bottom app bar
            }}
          >
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
