const FIREBASE_STORAGE_URL = 'https://firebasestorage.googleapis.com/v0/b/projeto-teste-7dcf3.appspot.com/o/images%2Fthumb_';


// TODO transform this function into a pure one
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

export default generateLinkForThumbnail;