//Definisco l'arrey degli elementi

const imagesArrey = [
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

//Definisco le variabili

const imageDom = document.querySelector('.images');
const imageContainerDom = document.querySelector('.image-container');
const cardContainer = document.getElementsByClassName('card-image');
const imageBackDom = document.getElementsByClassName('image-back');
const imgClick =document.getElementsByClassName('.img-back');
const nextDom = document.querySelector('#next');
const prevDom = document.querySelector('#prev');

let activeImage = 0;
let columnContent = "";
let imageContent = ""; 

//Prendo gli elementi nell'array e li popolo

imagesArrey.forEach((element) => {

    const card = `<div class="card-image">
                        <img class="img" src="${element.image}" />
                        <div class="text-cnt">
                            <h1 class="title-card">${element.title}</h1>
                            <p class="p-card">${element.text}</p>
                        </div>
                  </div>`;

    const newImage = `<div class="image-back">
                            <img class="img-back" src="${element.image}" />
                       </div>`;

    imageContent += newImage;

    columnContent += card;    

} )

console.log(imagesArrey)

//Inserisco nel Dom gli elementi
imageDom.innerHTML = columnContent;
imageContainerDom.innerHTML = imageContent;

cardContainer[activeImage].classList.add('d-block'); 
imageBackDom[activeImage].classList.add('current');

//Creo gli addEventListener

function nextSlide(){
    cardContainer[activeImage].classList.remove('d-block');
    imageBackDom[activeImage].classList.remove('current');
}

function prevSlide(){
    cardContainer[activeImage].classList.add('d-block');
    imageBackDom[activeImage].classList.add('current');
}

let skip;

nextDom.addEventListener('click', function(){
    skip = setInterval(timeSkip, 2000);
})

prevDom.addEventListener('click', function(){
    clearInterval(skip);
})

function myStopFunction() {
    clearInterval(myInterval);
}

function timeSkip(){
    if (activeImage < cardContainer.length - 1) {
    
        nextSlide();
        activeImage++;
        prevSlide();

    }else{
        nextSlide();
        activeImage = 0;
        prevSlide();
    }
}









