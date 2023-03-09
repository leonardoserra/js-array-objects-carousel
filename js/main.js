const imagesArray = [1, 2, 3, 4, 5];
const imagesList = document.querySelector('.images-list');

let imagesListContent = "";

console.log(imagesArray);
for(let i = 0; i < imagesArray.length; i++){
    let imagesListFiller = `<div class="image-wrapper"><img class="image" src="./img/0${imagesArray[i]}.webp" /></div>`;
    imagesListContent += imagesListFiller;
}

imagesList.innerHTML = imagesListContent;
console.log(imagesListContent);

const imageGroup = document.getElementsByClassName('image-wrapper');

console.log(imageGroup);

let currentImage = 0;
imageGroup[currentImage].classList.add('show');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

next.addEventListener('click',
    function(){
        if(currentImage < imageGroup.length - 1){
            imageGroup[currentImage].classList.remove('show');
            currentImage++;
            imageGroup[currentImage].classList.add('show');
            prev.classList.remove('hide');
            
        }

        if(currentImage == imageGroup.length - 1){
            next.classList.add('hide');
        }


    }
)

prev.addEventListener('click',
    function(){
        if(currentImage > 0){
            imageGroup[currentImage].classList.remove('show');
            currentImage--;
            imageGroup[currentImage].classList.add('show');
            next.classList.remove('hide');
            
        }

        if(currentImage == 0){
            prev.classList.add('hide');
        }


    }
)

