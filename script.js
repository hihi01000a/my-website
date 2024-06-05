
function createRaindrop() {
    const raindrop = document.createElement('div');
    raindrop.classList.add('raindrop');
    raindrop.style.left = `${Math.random() * window.innerWidth}px`;
    document.querySelector('.sky').appendChild(raindrop);

    setTimeout(() => {
        raindrop.remove();
    }, 2000); // 빗방울이 사라지는 시간
}

setInterval(createRaindrop, 100); // 빗방울 생성 간격
