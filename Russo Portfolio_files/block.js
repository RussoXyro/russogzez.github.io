document.addEventListener("keydown", function (event) {
  if (
    (event.ctrlKey && event.shiftKey && event.key === "C") ||
    event.key === "F12" ||
    (event.ctrlKey && event.shiftKey && event.key === "I") ||
    (event.ctrlKey && event.key === "U") ||
    (event.ctrlKey && event.shiftKey && event.key === "J")
  ) {
    event.preventDefault();
  }
});
