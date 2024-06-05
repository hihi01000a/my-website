// script.js
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const query = document.getElementById('search-input').value;
    document.getElementById('result').innerText = `검색 결과: ${query}`;
});
