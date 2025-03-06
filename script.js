function changerCouleur(color) {
    let shape = document.getElementById("product-shape");

    if (shape) {
        console.log("L'élément #product-shape a été trouvé !");
        console.log("Changement de couleur en : ", color);
        
        // Méthode 1 : setAttribute (si la première ne marche pas)
        shape.setAttribute("fill", color);

        // Méthode 2 : CSS (pour certains navigateurs)
        shape.style.fill = color;
    } else {
        console.error("Erreur : Element #product-shape introuvable !");
    }
}
