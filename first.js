window.onload = function() {
    //custom cursor
    document.addEventListener('mousemove', (e) => {
        const cursor = document.querySelector('.custom-cursor');
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
    });
}