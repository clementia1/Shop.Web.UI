import React, {useEffect, useState} from "react";
import { Typography, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';
import LoginButton from "../components/LoginButton";
import UserMenu from "./UserMenu";
import { useAuth } from "oidc-react";

const useStyles = makeStyles((theme) => ({
    topbar: {
        padding: 32,
        marginBottom: 120,
    },
}));

function Topbar() {
    const classes = useStyles();
    const auth = useAuth();

    return (
        <div className={classes.topbar}>
            { auth.userData == null ? <LoginButton/> : <UserMenu/>}
        </div>
    );
}

export default Topbar;