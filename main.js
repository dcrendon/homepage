import "./main.css";
import "animate.css";

const codeIcon = document.getElementById("code");
const codeList = document.getElementById("code-list");
const nameIcons = document.getElementById("name-icons");

codeIcon.addEventListener("click", () => {
  if (codeList.classList.contains("animate__fadeOut")) {
    nameIcons.style.transform = "translateY(-14rem)";
    setTimeout(() => {
      codeList.classList.remove("animate__fadeOut");
      codeList.classList.add("animate__fadeIn");
      codeList.style.display = "flex";
    }, 250);
  } else {
    codeList.classList.remove("animate__fadeIn");
    codeList.classList.add("animate__fadeOut");
    setTimeout(() => {
      codeList.style.display = "none";
      nameIcons.style.transform = "translateY(0)";
    }, 250);
  }
});
