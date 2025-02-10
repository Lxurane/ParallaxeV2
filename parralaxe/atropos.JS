document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.my-atropos').forEach((element) => {
        Atropos({
            el: element,
            activeOffset: 30,
            shadowScale: 1.05, // Taille de l'ombre
            rotateXMax: 15, // Limite de rotation sur l'axe X
            rotateYMax: 15, // Limite de rotation sur l'axe Y
        });
    });
});
