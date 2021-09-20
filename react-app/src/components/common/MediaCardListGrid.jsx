import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MediaCardPreview from "./MediaCardPreview";
import LinearIndeLoading from "./LinearIndeterminentLoading";
import generateLinkForThumbnail from "../../utils/generateLinkForThumbnail";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function MediaCardListGrid({elements = []}) {
    const classes = useStyles();


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {elements.length === 0 ? <LinearIndeLoading/> : null}

                {elements.map(element => <Grid item xs={12} sm={6} md={3}>


                        {/* caso possua um nome será um curso ou genero */}
                        {element.nome && <MediaCardPreview cardTitle={element.nome}
                                                           imageTitle={'alt da imagem'}
                                                           imageSrc='/assets/colorful-hardback-books-on-the-shelf.jpeg'
                                                           key={element.nome}
                                                           cardAction='Ver Livros'/>}

                        {/* caso possua um titulo será um livro */}
                        {/* // TODO add exibir dados do livro no cartão como sinopse, preço, autor, etc */}
                        {element.titulo && <MediaCardPreview cardTitle={element.titulo}
                                                             imageTitle={'alt da imagem'}
                                                             imageSrc={generateLinkForThumbnail(element.url_foto)}
                                                             key={element.nome}
                                                             cardAction='Ver Livros'/>}

                    </Grid>
                )}


            </Grid>
        </div>
    );
}

