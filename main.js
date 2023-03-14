import './main.css'

const codeIcon = document.getElementById('code')
const codeList = document.getElementById('code-list')

codeIcon.addEventListener('click', () => {
    if (codeList.style.display === 'none') {
        codeList.classList.add('fadein')
        codeList.style.display = 'flex'
    } else {
        codeList.classList.remove('fadein')
        codeList.style.display = 'none'
    }
})