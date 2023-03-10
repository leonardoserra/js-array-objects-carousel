/*
    Consegna:
    Dato un array di oggetti letterali con:
    - url dell’immagine
    - titolo
    - descrizione

    const images = [
        {
            image: 'img/01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
            image: 'img/02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
            image: 'img/03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
            image: 'img/04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
            image: 'img/05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ];

    Creare un carosello come nella foto allegata.
   
    Milestone 0:
        Come nel primo carosello realizzato, focalizziamoci prima
        sulla creazione del markup statico: costruiamo il container 
        e inseriamo l’immagine grande in modo da poter stilare lo slider.
    Milestone 1:
        Ora rimuoviamo i contenuti statici e usiamo l’array
        di oggetti letterali per popolare dinamicamente il carosello.
        Al click dell’utente sulle frecce verso sinistra o 
        destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
    Milestone 2:
        Aggiungere il **ciclo infinito** del carosello. 
        Ovvero se la miniatura attiva è la prima e l’utente
        clicca la freccia verso destra, la miniatura che deve 
        attivarsi sarà l’ultima e viceversa per l’ultima miniatura 
        se l’utente clicca la freccia verso sinistra.
    BONUS 1:
        Aggiungere le thumbnails (sottoforma di miniatura) ed al 
        click attivare l’immagine corrispondente.
    BONUS 2:
        Aggiungere funzionalità di autoplay: dopo un certo periodo 
        di tempo (3 secondi) l’immagine attiva dovrà cambiare alla 
        successiva.
    BONUS 3:
        Aggiungere bottoni di start/stop e di inversione del meccanismo
        di autoplay.
*/



const imagesArray = [1, 2, 3, 4, 5];
const imagesList = document.querySelector('.images-list');
const thumbnailsContainer = document.querySelector('.thumbnails-container')

let imagesListContent = "";
let thumbnailsContainerContent = "";

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

console.log(images);
for(let i = 0; i < images.length; i++){
    
    let imagesListFiller = `<div class="image-wrapper">
                                <img class="image" src="./${images[i].image}" />
                                <div class="img-description">
                                    <div class="img-title">${images[i].title}</div>
                                    <div class="img-text">${images[i].text}</div>
                                </div>
                            </div>`;
    let thumbnailsContainerFiller = `<div class="thumbnail">
                                        <div class="overlay"></div>
                                        <img class="miniature" src="./${images[i].image}" />
                                    </div>`;

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


//click su immagine che viene messa, da sistmare......

for(let c = 0; c < thumbnailGroup.length; c++){

    thumbnailGroup[c].addEventListener('click', function(){
        imageGroup[c].classList.remove('show');
        thumbnailGroup[c].classList.remove('selected');
        overlayGroup[c].classList.remove('noOverlay');

        

        imageGroup[c].classList.add('show');
        thumbnailGroup[c].classList.add('selected');
        overlayGroup[c].classList.add('noOverlay');
    })

}

next.addEventListener('click',nextSlide);

prev.addEventListener('click',prevSlide);


    //bonus2

let interval;   

    //metti ! se vuoi spegnerlo per debuggarlo  
    let flag = true;
    if(flag){
        interval = setInterval(nextSlide, 2000);
    } 


//function

function nextSlide(){

    imageGroup[currentImage].classList.remove('show');
    thumbnailGroup[currentImage].classList.remove('selected');
    overlayGroup[currentImage].classList.remove('noOverlay');

    if(currentImage < imageGroup.length - 1){
        currentImage++;
    }else if(currentImage == imageGroup.length - 1){ 
        currentImage = 0;
    }
    imageGroup[currentImage].classList.add('show');
        thumbnailGroup[currentImage].classList.add('selected')
        overlayGroup[currentImage].classList.add('noOverlay');
}

function prevSlide(){

        imageGroup[currentImage].classList.remove('show');
        thumbnailGroup[currentImage].classList.remove('selected')
        overlayGroup[currentImage].classList.remove('noOverlay');

        if(currentImage > 0){
            currentImage--;  
        } else if(currentImage == 0){
            currentImage = imageGroup.length - 1;
        }

        imageGroup[currentImage].classList.add('show');
        thumbnailGroup[currentImage].classList.add('selected')
        overlayGroup[currentImage].classList.add('noOverlay');
    
}

function ciclaSu(){

    imageGroup[currentImage].classList.remove('show');
    thumbnailGroup[currentImage].classList.remove('selected');
    overlayGroup[currentImage].classList.remove('noOverlay');

    currentImage++;

    imageGroup[currentImage].classList.add('show');
    thumbnailGroup[currentImage].classList.add('selected')
    overlayGroup[currentImage].classList.add('noOverlay');

    if(currentImage == imageGroup.length - 1){
        clearInterval(interval);
        setTimeout(function(){
        imageGroup[currentImage].classList.remove('show');
        thumbnailGroup[currentImage].classList.remove('selected')
        overlayGroup[currentImage].classList.remove('noOverlay');
        
        currentImage = 0;
        
        imageGroup[currentImage].classList.add('show');
        thumbnailGroup[currentImage].classList.add('selected')
        overlayGroup[currentImage].classList.add('noOverlay');
        interval = setInterval(ciclaSu, 2000);
        }, 2000);
    
    }   
    
}

function ciclaGiu(){

    console.log(currentImage);
    imageGroup[currentImage].classList.remove('show');
    thumbnailGroup[currentImage].classList.remove('selected')
    overlayGroup[currentImage].classList.remove('noOverlay');
    // currentImage = thumbnailGroup.length - 1;
    
    currentImage--;

    imageGroup[currentImage].classList.add('show');
    thumbnailGroup[currentImage].classList.add('selected')
    overlayGroup[currentImage].classList.add('noOverlay');

    next.classList.remove('hide');
        
    if(currentImage == 0){
        clearInterval(interval);
        setTimeout(function(){

        imageGroup[currentImage].classList.remove('show');
        thumbnailGroup[currentImage].classList.remove('selected')
        overlayGroup[currentImage].classList.remove('noOverlay');

        currentImage = imageGroup.length - 1;

        imageGroup[currentImage].classList.add('show');
        thumbnailGroup[currentImage].classList.add('selected')
        overlayGroup[currentImage].classList.add('noOverlay');
        interval = setInterval(ciclaGiu, 2000);
        }, 2000);
    }

 }






// thumbnailGroup[currentImage].addEventListener('click', function(){
//     let prevImage = document.querySelector('.selected');
//     prevImage.classList.remove('selected')
//     this[currentImage].forEach(element => {
//         element.classList.add('selected');
//     });

// })


