const imgElement = document.getElementById('avatar_div');
let avatar_images = [
    '0401.jpeg',
    'selfie_1018.png',
    '0430.jpg',
    'vtu-icon-beach.png'
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