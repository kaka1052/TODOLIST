const images = [
  "klimt-4359075_1920.jpg",
  "masterpiece-4359010_1920.jpg",
  "masterpiece-4359011_1920.jpg",
];

const ran_img = Math.floor(Math.random() * images.length);
document.body.style.background = `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)),url(img/${images[ran_img]})`;
