const compliments = [
  "You’re cuter than a baby panda eating ice cream 🍦🐼",
  "You shine brighter than my phone screen at 2 AM 📱✨",
  "You’re the karela to my sabji… wait, that sounds wrong 😅",
  "You make WiFi signals stronger just by smiling 📶❤️",
  "You’re sweeter than unlimited free desserts 🍩🍫"
];

const gifs = [
  "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif", // funny panda
  "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif", // sparkle
  "https://media.giphy.com/media/26AHONQ79FdWZhAI0/giphy.gif", // karela joke
  "https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif", // wifi dance
  "https://media.giphy.com/media/26BRuo6sLetdllPAQ/giphy.gif"  // dessert
];

const complimentBtn = document.getElementById("complimentBtn");
const complimentText = document.getElementById("complimentText");
const complimentGif = document.getElementById("complimentGif");

complimentBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  complimentText.textContent = compliments[randomIndex];
  complimentGif.src = gifs[randomIndex];
});
