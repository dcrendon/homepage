import './main.css';

const codeIcon = document.getElementById('code')
const codeList = document.getElementById('code-list')

codeIcon.addEventListener('click', () => {
    if (codeList.classList.contains('hidden') || codeList.classList.contains('fadeout')) {
        codeList.classList.remove('hidden');
        codeList.classList.remove('fadeout');
        codeList.classList.add('fadein');
    } else {
        codeList.classList.remove('fadein');
        codeList.classList.add('fadeout');
    }
});
