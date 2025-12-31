const guessBtn = document.getElementById("guessBtn");
const guessInput = document.getElementById("guessInput");
const errorMsg = document.getElementById("errorMsg");

const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");
const garden = document.getElementById("garden");

guessBtn.addEventListener("click", () => {
  const answer = guessInput.value.trim().toLowerCase();

  if (answer === "me") {
    screen1.classList.remove("active");
    screen2.classList.add("active");
    startGarden();
  } else {
    errorMsg.textContent = "nope 🤭 try again";
  }
});

// 🌼 slowly fill background with jasmine
function startGarden() {
  let count = 0;

  const interval = setInterval(() => {
    const flower = document.createElement("div");
    flower.className = "jasmine";
    flower.textContent = "🌼";

    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = Math.random() * 100 + "vh";

    garden.appendChild(flower);
    count++;

    if (count > 35) clearInterval(interval);
  }, 400); // slow bloom
}
