const imgElement = document.getElementById('avatar_div');
let avatar_images = [
    'ECE-headshot-2025-square.jpg',

    // 'iclr24_headshot.jpg',
    // 'nips23_headshot.jpg',
    // 'xie.tinghao.square.png',
    // 'grad_0.jpg',
    // 'grad_2.jpg',
    // 'IMG_7818.png',
    // 'IMG_7826.png',
    // 'IMG_8036.png',
    // 'IMG_8667.png',
    // '2023.0920.square.png',

    // '0401.jpeg',
    // 'selfie_1018.png',
    // '0430.jpg',
    // 'vtu-icon-beach.png',
    // 'grad_1.jpg',
    // 'IMG_3396.png',
    // 'IMG_8669.png',
];
let num_images = avatar_images.length;
let index = 0;
function change() {
    tmp = Math.floor(Math.random() * num_images);
    if(tmp == index) {
        tmp >= (num_images - 1) ? tmp = 0 : tmp++;
    }
    index = tmp;
    imgElement.style.backgroundImage = `url(/images/${avatar_images[index]})`;
    console.log(imgElement.style.backgroundImage)
    // index >= (num_images - 1) ? index = 0 : index++;
}
window.setInterval(change, 2500);
