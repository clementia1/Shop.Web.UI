import React, {useEffect, useState} from "react";
import { Typography, Grid } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Skeleton from '@material-ui/lab/Skeleton';

const useStyles = makeStyles((theme) => ({
    navigation: {
        padding: 32,
        marginBottom: 60,
    },
    bar: {
        background: '#ebecf2',
    }
}));

function Navigation() {
    const classes = useStyles();

    return (
        <div className={classes.navigation}>
            <Typography component="div" variant="h1">
                <Skeleton className={classes.bar} animation={false}/>
            </Typography>
        </div>
    );
}

export default Navigation;