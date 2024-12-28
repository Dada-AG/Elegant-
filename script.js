document.addEventListener('DOMContentLoaded', () => {
    const bar = document.getElementById('bar');
    const nav = document.getElementById('navbar');
    const closeBtn = document.getElementById('close');

    if (bar) {
        bar.addEventListener('click', () => {
            nav.classList.toggle('active');
        });
    }

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
});

