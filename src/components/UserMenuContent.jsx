import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function UserMenuContent(props) {

  return (
    <Menu
        anchorEl={props.anchorEl}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        keepMounted
        open={Boolean(props.anchorEl)}
        onClose={props.handleClose}
      >
        <MenuItem onClick={props.handleClose}>Profile</MenuItem>
        <MenuItem onClick={props.handleClose}>My account</MenuItem>
        <MenuItem onClick={props.signOut}>Logout</MenuItem>
    </Menu>
  );
}