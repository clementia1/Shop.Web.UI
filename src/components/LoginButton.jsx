import React from 'react';
import { useAuth } from 'oidc-react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function LoginButton() {
	const { signIn } = useAuth();
	return <Button onClick={() => signIn()} variant="contained">Login</Button>
}

export default LoginButton;