const images = ['Images/The Heart and the Star- Final p1.png','Images/The Heart and the Star- Final p2.png','Images/The Heart and the Star- Final p3.png','Images/The Heart and the Star- Final p4.png','Images/The Heart and the Star- Final p5.png','Images/The Heart and the Star- Final p6.png','Images/The Heart and the Star- Final p7.png','Images/The Heart and the Star- Final p8.png','Images/The Heart and the Star- Final p9.png','Images/The Heart and the Star- Final p10.png','Images/The Heart and the Star- Final p11.png','Images/The Heart and the Star- Final p12.png'];
let index = 0;

window.addEventListener('load', () => {
    document.addEventListener('click', () => {
        next_img();
    }); 
    document.addEventListener('keyup', event => {
        if (event.code === 'Space') {
            next_img();
        }
    });
    images.forEach(preload_img);
});

function next_img(){
    if (index < images.length-1) index++;
    else index = 0;
    document.getElementById('img').src = images[index];
}

function preload_img(img_path){
    console.log(img_path);
    let img = new Image();
    img.src = img_path;
}
