const image = ["./img/slide1.jpg", "./img/slide2.jpg", "./img/slide3.jpg", "./img/slide4.jpg" ];

let image_len = image.length-1;
let image_num = 0;
let img = document.getElementById('slideImg');

function showImg() {
    image_num++;
if (image_num > image_len){
    image_num = 0;
}

img.src = image[image_num]

    return false;
}

window.setInterval("showImg()", 3000);