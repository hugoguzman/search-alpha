import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

export default function BottomAppBar() {
  return (
    <React.Fragment>
      <AppBar position='fixed' color='primary' sx={{ top: 'auto', bottom: 0 }}>
        <Toolbar></Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
