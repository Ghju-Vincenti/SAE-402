function changerCouleur(color) {
    let shape = document.getElementById("product-shape");

    if (shape) {
        console.log("Changing color to:", color);
        shape.setAttribute("fill", color);
        shape.style.fill = color;
    } else {
        console.error("Error: #product-shape not found!");
    }
}

// Function to handle jscolor picker
function changeColor(picker) {
    let shape = document.getElementById("product-shape");

    if (shape) {
        let color = picker.toHEXString(); // Get color from picker
        console.log("Picker color selected:", color);
        shape.setAttribute("fill", color);
        shape.style.fill = color;
    } else {
        console.error("Error: #product-shape not found!");
    }
}
