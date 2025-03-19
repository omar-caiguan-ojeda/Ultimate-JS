const botones = document.querySelectorAll('.color-btn');
botones.forEach(boton => {
    boton.addEventListener('click', () => {
        document.body.style.backgroundColor = boton.dataset.color;
    });
})