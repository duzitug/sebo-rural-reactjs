import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MediaCard from "./MediaCard";
import LinearIndeterminate from "./LinearIndeterminate";

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

    const FIREBASE_STORAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2Fthumb_';

    function generateLinkForThumbnail(originalImageUrl) {

        // caso o link original já seja para o thumbnail da imagem do livro
        if (originalImageUrl.includes('thumb_')) {

            return originalImageUrl;

            // senão, será montado o link para o thumbnail correspondente
        } else {

            const fileName = originalImageUrl.split('%2F')[1].split('?')[0];

            return FIREBASE_STORAGE_URL + fileName + '?alt=media';
        }


    }


    return (
        <div className={classes.root}>
            <Grid container spacing={3}>

                {elements.length === 0 ? <LinearIndeterminate/> : null}

                {elements.map(element => <Grid item xs={12} sm={6} md={3}>


                        {/* caso possua um nome será um curso ou genero */}
                        {element.nome && <MediaCard cardTitle={element.nome}
                                                    imageTitle={'alt da imagem'}
                                                    imageSrc='/assets/colorful-hardback-books-on-the-shelf.jpeg'
                                                    key={element.nome}
                                                    cardAction='Ver Livros'/>}

                        {/* caso possua um titulo será um livro */}
                        {/* // TODO add exibir dados do livro no cartão como sinopse, preço, autor, etc */}
                        {element.titulo && <MediaCard cardTitle={element.titulo}
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

