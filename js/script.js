console.log('nome');
// 1 Mi CREO LARRAY CON IPATH DELLE IMMAGINI
const images =[
    './img/01.webp',
    './img/02.webp',
    './img/03.webp',
    './img/04.webp',
    './img/05.webp',
]
// 2 MI RECPERO GLI ELEMENTI DEL DOM CON CLASSI ITEMAS E THUMS NEI QUALI ANDARE AD INNIETTAE HTML DELLE IMMAGINI

const items = documnet.querySelector('.items');
const thumbs = document.querySelector('.thumbs');

//  DEFINIRE 2 VARIABILI : UNA CHE CONTIENE LA STTRINGA DELLE IMMAGINI IN TEEMS E L'ALTRA IN THUMBS.

let itemasContent='';
let thumbsContent='';

// DEFINICO L'INDICE DELL'ARRAY CHE DEVE RAPPRESENTARE LIMMAGINE ATTIVA

let activeItems = 0;

// ciclo l'arrey per riempire le stringhe con l'html delle immagini
for (let i=0, i < images.length, i++){
    
}