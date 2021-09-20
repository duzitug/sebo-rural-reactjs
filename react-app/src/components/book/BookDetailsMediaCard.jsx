import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import generateLinkForThumbnail from "../../utils/generateLinkForThumbnail";

const useStyles = makeStyles({
    root: {
        maxWidth: 260,
    },
    media: {
        height: 170,
    },
});

// TODO create env file for env variables

// TODO create utils folder for utils functions

export default function MediaCardBookDetails({titulo, autor, descricao, curso = null, preco, genero = null, urlFoto}) {
    const classes = useStyles();


    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={'blablabla'}
                    title={titulo}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {titulo}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {descricao}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {autor}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {preco}
                    </Typography>

                    {curso && <Typography variant="body2" color="textSecondary" component="p">
                        {curso}
                    </Typography>}

                    {genero && <Typography variant="body2" color="textSecondary" component="p">
                        {genero}
                    </Typography>}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    {'eu quero!'}
                </Button>
            </CardActions>
        </Card>
    );
}
