function getRandomInt(t, a) {
    return t = Math.ceil(t), a = Math.floor(a), Math.floor(Math.random() * (a - t)) + t
}
const image = document.createElement("img");
image.src = `images/${getRandomInt(1, 4)}.jpg`;
document.querySelector("#images-center").appendChild(image);