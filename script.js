document.getElementById('magicButton').addEventListener('click', function() {
    const dynamicText = document.getElementById('dynamicText');
    dynamicText.innerText = 'Wow! The text has changed!';
    dynamicText.style.color = '#ff6b6b';
    dynamicText.style.fontSize = '24px';
    dynamicText.style.transition = 'all 0.5s';
});
