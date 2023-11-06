import './main.css';

const codeIcon = document.getElementById('code')
const codeList = document.getElementById('code-list')

codeIcon.addEventListener('click', () => {
    codeList.classList.toggle('hidden');
});
