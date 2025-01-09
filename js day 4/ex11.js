let livre = {
    "Titre" : "Le Petit Prince",
    "Auteur" : "Antoine de Saint-Exupéry",
    "année" : "1943",
    "Disponible" : "true"
}
for (let propriete in livre) {
    console.log(propriete + " : " + livre[propriete]);
}
livre.disponible = false;
livre.langue = "Français";

console.log("\n\n")
for (let propriete in livre) {
    console.log(propriete + " : " + livre[propriete]);
}