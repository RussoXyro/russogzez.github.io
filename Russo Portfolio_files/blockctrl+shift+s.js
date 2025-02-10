document.addEventListener("contextmenu", (event) => event.preventDefault()); // Blocks right-click
document.addEventListener("keydown", function (event) {
  if (event.key === "F12") {
    event.preventDefault();
  }
});
