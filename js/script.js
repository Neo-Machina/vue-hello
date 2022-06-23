// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// BONUS:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data (in data avrò l'src).

var app = new Vue(
    {
        el: '#root',
        data: {
            textTitle: 'Hello Vuejs!!! :)',
            image: 'https://www.marcotogni.it/v-2/34/jigokudani.jpg'
        }

    }
);