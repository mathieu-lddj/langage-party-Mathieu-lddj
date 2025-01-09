const tableau = [3, 55, 88, 54]
var somme = 0
if(tableau.length != 0){
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i]
    }
    console.log(somme/tableau.length)
} else {
    console.log("pas de valeurs dans le tableau")
}