const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    }
];

let imgAttiva = 0;

let itemsDom = document.querySelector('.items');
let imgWrapperDom = document.querySelector('.imgWrapper_container');

for ( x = 0; x < images.length; x++) {
    itemsDom.innerHTML += ` <div class="item">
    <img class="carousel_img" src="${images[x].url}" alt="Immagine ${x + 1}">
    <div class="text-container">
        <h2>${images[x].title}</h2>
        <p>${images[x].description}</p>
    </div>
    </div>`;

    imgWrapperDom.innerHTML += `<div class="imgWrapper"> 
    <img class="borderImg" src="${images[x].url}"</div>`;
}

const imgList = document.querySelectorAll('.item');
imgList[imgAttiva].classList.add('show');

const borderImgList = document.querySelectorAll('.borderImg');
borderImgList[imgAttiva].classList.add('active');

const prevDom = document.querySelector('.prev');
const nextDom = document.querySelector('.next');

setInterval(scrollRight, 3000);

borderImgList.forEach(function(elem, i) {
    elem.addEventListener('click', 
        function() {
            removeStyle();
            imgAttiva = i;
            imgList[i].classList.add('show');
            borderImgList[i].classList.add('active');
        }
    )
});

prevDom.addEventListener('click',
    function() {
        scrollLeft();
    }
);

nextDom.addEventListener('click',
    function() {
        scrollRight();
    }
);

function removeStyle() {
    imgList[imgAttiva].classList.remove('show');
    borderImgList[imgAttiva].classList.remove('active');
}

function addStyle() {
    imgList[imgAttiva].classList.add('show');
    borderImgList[imgAttiva].classList.add('active');
}

function scrollRight() {
    removeStyle();
    if(imgAttiva == images.length - 1) {
        imgAttiva = 0;
    } else {
        imgAttiva++;
    }
    addStyle();
}

function scrollLeft() {
    removeStyle();
    if(imgAttiva == 0) {
        imgAttiva = images.length - 1;
    } else {
        imgAttiva--;
    }
    addStyle();
}

