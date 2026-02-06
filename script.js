const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const container = document.querySelector(".container");
const gifContainer = document.getElementById("gifContainer");
const heartsContainer = document.querySelector(".hearts");

let yesScale = 1;
let noScale = 1;

// Move and shrink NO button (mouse + touch)
function dodgeNoButton() {
  const x = Math.random() * 300 - 150;
  const y = Math.random() * 200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px) scale(${noScale})`;

  if (noScale > 0.4) {
    noScale -= 0.05;
  }

  if (yesScale < 1.9) {
    yesScale += 0.06;
    yesBtn.style.transform = `scale(${yesScale})`;
  }
}

noBtn.addEventListener("mouseover", dodgeNoButton);
noBtn.addEventListener("touchstart", dodgeNoButton);

yesBtn.addEventListener("mouseover", () => {
  if (yesScale < 1.9) {
    yesScale += 0.03;
    yesBtn.style.transform = `scale(${yesScale})`;
  }
});

yesBtn.addEventListener("touchstart", () => {
  if (yesScale < 1.9) {
    yesScale += 0.05;
    yesBtn.style.transform = `scale(${yesScale})`;
  }
});

yesBtn.addEventListener("click", () => {
  container.style.display = "none";
  gifContainer.classList.remove("hidden");
});

// 💖 Floating hearts generator
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerText = "💖";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = 16 + Math.random() * 20 + "px";
  heart.style.animationDuration = 4 + Math.random() * 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 300);
