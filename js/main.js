/*
    Consegna:
    Dato un array di oggetti letterali con:
    - url dell’immagine
    - titolo
    - descrizione
    Creare un carosello come nella foto allegata.
    Milestone 0:
    Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
    Milestone 1:
    Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
    Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
    Milestone 2:
    Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
    BONUS 1:
    Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
    BONUS 2:
    Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
    BONUS 3:
    Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/



const imagesArray = [1, 2, 3, 4, 5];
const imagesList = document.querySelector('.images-list');
const thumbnailsContainer = document.querySelector('.thumbnails-container')
let imagesListContent = "";
let thumbnailsContainerContent = "";

console.log(imagesArray);
for(let i = 0; i < imagesArray.length; i++){
    
    let imagesListFiller = `<div class="image-wrapper"><img class="image" src="./img/0${imagesArray[i]}.webp" /></div>`;
    let thumbnailsContainerFiller = `<div class="thumbnail"><div class="overlay"></div><img class="miniature" src="./img/0${imagesArray[i]}.webp" /></div>`;

    imagesListContent += imagesListFiller;
    thumbnailsContainerContent += thumbnailsContainerFiller;

}

imagesList.innerHTML = imagesListContent;
thumbnailsContainer.innerHTML = thumbnailsContainerContent;

const imageGroup = document.getElementsByClassName('image-wrapper');
const thumbnailGroup = document.getElementsByClassName('thumbnail');
const overlayGroup = document.getElementsByClassName('overlay');

console.log(imageGroup);
console.log(thumbnailGroup);


let currentImage = 0;
imageGroup[currentImage].classList.add('show');
thumbnailGroup[currentImage].classList.add('selected');
overlayGroup[currentImage].classList.add('noOverlay');

const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click',
    function(){

        
        
        if(currentImage < imageGroup.length - 1){
            imageGroup[currentImage].classList.remove('show');
            thumbnailGroup[currentImage].classList.remove('selected');
            overlayGroup[currentImage].classList.remove('noOverlay');
            

            currentImage++;

            imageGroup[currentImage].classList.add('show');
            thumbnailGroup[currentImage].classList.add('selected')
            overlayGroup[currentImage].classList.add('noOverlay');


            
            
        }else if(currentImage == imageGroup.length - 1){
            imageGroup[currentImage].classList.remove('show');
            thumbnailGroup[currentImage].classList.remove('selected')
            overlayGroup[currentImage].classList.remove('noOverlay');
            
            currentImage = 0;
           
            imageGroup[currentImage].classList.add('show');
            thumbnailGroup[currentImage].classList.add('selected')
            overlayGroup[currentImage].classList.add('noOverlay');
        }
        
    }
)

prev.addEventListener('click',
    function(){
        if(currentImage > 0){
            imageGroup[currentImage].classList.remove('show');
            thumbnailGroup[currentImage].classList.remove('selected')
            overlayGroup[currentImage].classList.remove('noOverlay');

            currentImage--;
            imageGroup[currentImage].classList.add('show');
            thumbnailGroup[currentImage].classList.add('selected')
            overlayGroup[currentImage].classList.add('noOverlay');

            next.classList.remove('hide');
            
        } else if(currentImage == 0){
            imageGroup[currentImage].classList.remove('show');
            thumbnailGroup[currentImage].classList.remove('selected')
            overlayGroup[currentImage].classList.remove('noOverlay');

            currentImage = imageGroup.length - 1;
            imageGroup[currentImage].classList.add('show');
            thumbnailGroup[currentImage].classList.add('selected')
            overlayGroup[currentImage].classList.add('noOverlay');

        }

    }
)

