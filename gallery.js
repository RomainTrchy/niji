var tiles = document.querySelectorAll(".tile");
var images = [
  "./images/gallery_images/1.jpg",
  "./images/gallery_images/2.jpg",
  "./images/gallery_images/3.jpg",
  "./images/gallery_images/4.jpg",
  "./images/gallery_images/5.jpg",
  "./images/gallery_images/6.jpg",
  "./images/gallery_images/7.jpg",
  "./images/gallery_images/8.jpg",
  "./images/gallery_images/9.jpg",
  "./images/gallery_images/10.jpg",
  "./images/gallery_images/11.jpg",
  "./images/gallery_images/12.jpg",
  "./images/gallery_images/13.jpg",
  "./images/gallery_images/14.jpg",
  "./images/gallery_images/15.jpg",
  "./images/gallery_images/16.jpg",
  "./images/gallery_images/17.jpg",
  "./images/gallery_images/18.jpg",
  "./images/gallery_images/19.jpg",
  "./images/gallery_images/20.jpg",
  "./images/gallery_images/21.jpg",
  "./images/gallery_images/22.jpg",
  "./images/gallery_images/23.jpg",
  "./images/gallery_images/24.jpg",
  "./images/gallery_images/25.jpg",
  "./images/gallery_images/26.jpg",
  "./images/gallery_images/27.jpg",
  "./images/gallery_images/28.jpg",
  "./images/gallery_images/29.jpg",
  "./images/gallery_images/30.jpg",
  "./images/gallery_images/31.jpg",
  "./images/gallery_images/32.jpg",
  "./images/gallery_images/33.jpg",
  "./images/gallery_images/34.jpg",
  "./images/gallery_images/35.jpg",
  "./images/gallery_images/36.jpg",
  "./images/gallery_images/37.jpg",
];

tiles.forEach(function (tile) {
  var randomImage = images[Math.floor(Math.random() * 36) + 1];
  console.log(randomImage);
  tile.style.backgroundImage = `url(${randomImage})`;
});
