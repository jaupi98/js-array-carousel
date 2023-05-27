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

const items = document.querySelector('.items');
const thumbs = document.querySelector('.thumbs-content');

//  DEFINIRE 2 VARIABILI : UNA CHE CONTIENE LA STTRINGA DELLE IMMAGINI IN TEEMS E L'ALTRA IN THUMBS.

let itemesContent='';
let thumbsContent='';

// DEFINICO L'INDICE DELL'ARRAY CHE DEVE RAPPRESENTARE LIMMAGINE ATTIVA

let activeItems = 0;

// ciclo l'arrey per riempire le stringhe con l'html delle immagini
for (let i=0 ;i < images.length ;i++){
    
    itemesContent +=`<div class="item">
                        <img src="./${images[i]}" alt="">
                    </div>`;
    
    thumbsContent +=` <div class="thumb">
                    <img src="./${images[i]}" alt="">
                </div>`;

}
// inietto in items e thumbs e thumb lhtml creato
items.innerHTML = itemesContent;
thumbs.innerHTML = thumbsContent;

// APLLICO LA VARIABILE ACTIVEITEMS PER APLLICARE LA CLASSE ACTIVE
document.getElementsByClassName('item')[activeItems].classList.add('active');
document.getElementsByClassName('thumb')[activeItems].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// gestisco il click sul div con lasse prev

prev.addEventListener('click' , function(){
    if(activeItems === 0){
        activeItems= images.length -1 ;

    } 
    else{
        activeItems--;
    }

    document.querySelector('.item.active').classList.remove('active');
    document.getElementsByClassName('item')[activeItems].classList.add('active');

    document.querySelector('.thumb.active').classList.remove('active');
    document.getElementsByClassName('thumb')[activeItems].classList.add('active')
});