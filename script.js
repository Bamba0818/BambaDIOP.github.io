document.addEventListener("DOMContentLoaded", function () {
    // Sélection des éléments
    const scrollBtn = document.querySelector("#scrollTop");

    // Fonction pour afficher ou cacher le bouton
    function toggleScrollButton() {
        if (window.scrollY > 100) {
            scrollBtn.style.display = "block"; // Afficher le bouton
        } else {
            scrollBtn.style.display = "none"; // Cacher le bouton
        }
    }

    // Fonction pour remonter en haut de la page
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Ajout des écouteurs d'événements
    window.addEventListener("scroll", toggleScrollButton);
    scrollBtn.addEventListener("click", scrollToTop);
});