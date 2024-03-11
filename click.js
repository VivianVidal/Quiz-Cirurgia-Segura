function redirection(url){
    window.location.href = url;
}

document.getElementById('start').addEventListener('click', () => {
    redirection('quiz.html')
});

document.getElementById('starting').addEventListener('click', () => {
    redirection('quiz.html')
});

