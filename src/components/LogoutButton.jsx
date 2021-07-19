import React from 'react';
import { useAuth } from 'oidc-react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

function LogoutButton() {
	const { signOut } = useAuth();
	return <Button onClick={() => signOut()} variant="contained">Logout</Button>
}

export default LogoutButton;