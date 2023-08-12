const fontSize = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");

fontSize.addEventListener("input", (event) => {
  const size = event.target.value + "px";
  textSpan.style.fontSize = size;
});