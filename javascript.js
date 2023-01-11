const btn = document.querySelector('.btn');


btn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollBy(0,650);
})