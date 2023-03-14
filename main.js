import './main.css'

const codeIcon = document.getElementById('code')
const codeList = document.getElementById('code-list')

codeIcon.addEventListener('click', () => {
    if (codeList.style.display === "none") {
        codeList.style.display = "flex";
    } else {
        codeList.style.display = "none";
    }
})