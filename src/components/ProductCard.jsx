import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Link,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        margin: 'auto',
        borderRadius: 9,
        marginBottom: 32,
        boxShadow: 'rgb(99 99 99 / 20%) 0px 0.02em 0.1rem 0px',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: 'rgb(99 99 99 / 20%) 0px 0.04em 0.5rem 0px',
        }
    },
    content: {
        paddingLeft: 28,
        height: '100%',
        backgroundImage: 'linear-gradient(180deg,transparent,transparent 25%,#333638bf)',
        justifyContent: 'flex-end',
        display: 'flex',
        flexDirection: 'column',
    },
    title: {
        fontSize: "1.5rem",
        fontWeight: 600,
        color: 'white',
    },
    price: {
        width: 'fit-content',
        background: 'aliceblue',
        padding: '10px 18px',
        borderRadius: 12,
    },
    media: {
        height: 275,
    },
    ingredients: {
        paddingTop: 16,
    }
}));

function ProductCard(props) {
    const classes = useStyles();

    if (props.data.previewImageUrl) {
        return (
            <Link component={RouterLink} underline="none" to={`${props.data.slug}`}>
                <Card className={classes.root} elevation={0}>                    
                    <CardMedia
                        className={classes.media}
                        image={props.data.previewImageUrl}
                        title={props.data.name}>
                        <CardContent className={classes.content}>
                            <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                {props.data.name}
                            </Typography>
                            <Typography className={classes.price} variant="body2" component="p">
                                ₴ {props.data.price}
                            </Typography>
                        </CardContent>
                    </CardMedia>
                </Card>
            </Link>
        )
    } 
    
    return <Skeleton className={classes.root} variant="rect" width={'auto'} height={275} />
}

export default ProductCard;