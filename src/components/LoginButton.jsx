import React from 'react';
import { useAuth, withAuth } from 'oidc-react';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, IconButton } from '@material-ui/core';
import Login from '../assets/icons/login.svg';

const useStyles = makeStyles((theme) => ({
    login: {
        float: 'right',
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

function LoginButton() {
    const classes = useStyles();
	const { signIn } = useAuth();

	return (
        <IconButton className={classes.login} aria-label="login" onClick={() => signIn()} style={{boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.2)"}}>
            <SvgIcon 
                component={Login}
                viewBox="0.00026595592498779297 0 511.9991149902344 512" />
        </IconButton>
    )
}

export default LoginButton;