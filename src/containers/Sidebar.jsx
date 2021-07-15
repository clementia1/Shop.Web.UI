import React, {useEffect, useState} from "react";
import { Typography, Grid } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sidebar: {
        padding: 32,
        background: '#ebecf2',
        borderRadius: 9,
        margin: '0px 32px',
        [theme.breakpoints.up('sm')]: {
            display: 'inherit',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    menuItem: {
        padding: 16,
    }
}));

function Sidebar() {
    const classes = useStyles();

    return (
        <div className={classes.sidebar}>
            {[...Array(5)].map(() => {
                return (
                    <Typography className={classes.menuItem} component="div" variant="h3">
                        <Skeleton animation={false}/>
                    </Typography>
                )
            })}
        </div>
    );
}

export default Sidebar;