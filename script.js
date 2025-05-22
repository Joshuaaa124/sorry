window.onload = () => {
  setTimeout(() => {
    const flap = document.querySelector(".flap");
    const letter = document.getElementById("letter");

    // Open the flap
    flap.style.transform = "rotateX(-180deg)";

    // Show the letter after the flap opens
    setTimeout(() => {
      letter.classList.add("show");
    }, 800);
  }, 1000);
};

function closeEnvelope() {
  const flap = document.querySelector(".flap");
  const letter = document.getElementById("letter");

  letter.classList.remove("show");

  setTimeout(() => {
    flap.style.transform = "rotateX(0deg)";
  }, 400);
}
