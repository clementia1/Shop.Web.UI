import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, InputBase, Badge } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import UserMenu from './UserMenu';
import LoginButton from '../components/LoginButton';
import CartButton from '../components/CartButton';
import { useAuth } from 'oidc-react';

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  appbar: {
    height: 64,
    margin: '64px 0px 192px 0px',
    boxShadow: 'none',
    backgroundColor: 'inherit',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: 'rgba(181, 181, 181, 0.15)',
    '&:hover': {
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 0.04em 0.3rem 0px',
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    padding: 8,
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    marginRight: 50,
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
}));

export default function Topbar() {
  const classes = useStyles();
  const auth = useAuth();

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="inherit" className={classes.appbar}>
        <Toolbar>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <CartButton/>
            { auth.userData == null ? <LoginButton/> : <UserMenu/>}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
