import React from 'react';
import { useAuth, withAuth } from 'oidc-react';
import { makeStyles } from '@material-ui/core/styles';
import { SvgIcon, IconButton } from '@material-ui/core';
import LoginIcon from '../assets/icons/login.svg';

const useStyles = makeStyles((theme) => ({
    login: {
        padding: 12,
        color: 'rgba(0, 0, 0, 0.67)'
    },
    icon: {
        fontSize: '2rem',
    }
}));

function LoginButton() {
    const classes = useStyles();
	const { signIn } = useAuth();

	return (
        <IconButton className={classes.login} aria-label="login" onClick={() => signIn()}>
            <SvgIcon 
                className={classes.icon}
                component={LoginIcon}
                viewBox="0.00026595592498779297 0 511.9991149902344 512" />
        </IconButton>
    )
}

export default LoginButton;