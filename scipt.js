const btnEl = document.querySelector(".btn")

btnEl.addEventListener("mouseover", (e) => {


const x = e.pageX - btnEl.offsetleft;
const y = e.pageY - btnEl.offsetTop;

btnEl.style.setProperty("--posX", x + "px");
btnEl.style.setProperty("--posY", y + "px");
})
