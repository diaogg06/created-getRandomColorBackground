import getRandomColor from './utils.js';

export default function initApp() {
    console.log('Hello world');

    const changeBackgroundButton = document.createElement('button');
    changeBackgroundButton.className = 'button';
    changeBackgroundButton.textContent = 'Изменить цвет страницы';
    document.body.append(changeBackgroundButton);

    changeBackgroundButton.addEventListener('click', () => {
        document.body.style.backgroundColor = getRandomColor();
    });
}

