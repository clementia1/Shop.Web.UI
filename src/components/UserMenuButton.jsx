import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    userProfile: {
        float: 'right',
        width: theme.spacing(7),
        height: theme.spacing(7),
    }
}));

function UserMenuButton(props) {
    const classes = useStyles();	

	return (
        <Avatar
            className={classes.userProfile}
            onClick={props.handleClick} 
            alt={props.userData.profile.given_name}
            src={props.userData.profile.picture} />
    )
}

export default UserMenuButton;