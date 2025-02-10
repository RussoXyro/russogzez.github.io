document.addEventListener("selectstart", (e) => e.preventDefault());
document.addEventListener("contextmenu", (e) => e.preventDefault());

document.getElementById("no-select")?.addEventListener("selectstart", (e) => {
  e.preventDefault();
});
