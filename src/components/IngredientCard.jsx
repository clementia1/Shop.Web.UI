import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
    Link,
    Avatar
} from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles({
    root: {
        padding: 16,
        maxWidth: 135,
        margin: 'auto',
        borderRadius: 9,
        marginBottom: 32,
        boxShadow: 'rgb(99 99 99 / 20%) 0px 0.02em 0.1rem 0px',
        "&.MuiPaper-root": {
            backgroundColor: 'inherit',
        }
    },
    title: {
        fontSize: "0.9rem",
        textAlign: 'center',
        marginTop: 8,
    },
    media: {
        height: 60,
        width: 60,
        margin: 'auto',
    },
    ingredients: {
        paddingTop: 16,
    }
});

function IngredientCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root} elevation={0}>
            <CardMedia
                className={classes.media}
                image={props.data.imageUrl}
                title={props.data.name}/>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                {props.data.name}
            </Typography>
        </Card>
    );
}

export default IngredientCard;