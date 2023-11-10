const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["image1.jpeg", "image2.webp", "image3.jpeg", "image4.webp"];

myButton.addEventListener('click', changeImage);

function changeImage () {

    let randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);

    image.src = "images/" + images[randomIndex];
}