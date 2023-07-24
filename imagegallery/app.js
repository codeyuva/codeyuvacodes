function showImage(src) {
    var bigContainer = document.getElementById("showimg");
    var bigImage = document.getElementById('old');
    var newimg = document.getElementById("img");

    bigImage.src = src;
    bigImage.id = "old";

    bigContainer.replaceChild(bigImage, newimg);
}
function slideLeft() {
    var slidingButton=document.getElementById('slides');
    const button = document.getElementById('sLeft');  
  
    button.onclick = function () {  
        slidingButton.scrollLeft += -150;  
    };  
}
function slideRight() {
    var slidingButton=document.getElementById('slides');
    const button = document.getElementById('sRight');  
  
    button.onclick = function () {  
        slidingButton.scrollLeft += 150;  
    };  
}
function loadImages() {
    console.log('object');
    const ul = document.getElementById("slides");
    const imageCount = 10;
    const leftIcon=` <li class="list-group-item" id="icon-button1">
                    <i class="fa fa-angle-left fa-lg" id="sLeft" aria-hidden="true" onclick="slideLeft()"></i>
                </li>`;
    ul.innerHTML+=leftIcon;
    const liTemplate = (imageSrc) => `
        <li class="list-group-item">
            <img src="${imageSrc}" onclick="showImage('${imageSrc}')" alt="">
        </li>
    `;

    for (let i = 1; i <= imageCount; i++) {
        const imageSrc = `images/${i}.jpg`; 
        const liHTML = liTemplate(imageSrc);
        ul.innerHTML += liHTML;
    }
    const rightIcon = `<li class="list-group-item" id="icon-button2">
                    <i class="fa fa-angle-right" aria-hidden="true" onclick="slideRight()" id="sRight"></i>
                </li>`;
     ul.innerHTML+=rightIcon;
}
window.addEventListener("load", loadImages);