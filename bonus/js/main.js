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

