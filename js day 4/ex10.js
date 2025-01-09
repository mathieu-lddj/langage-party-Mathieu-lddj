var tableau = []
for (let i = 0; i < 50; i++) {
    let nombreAleatoire = Math.floor(Math.random() * (100)) + 1;
    tableau.push(nombreAleatoire)
}

var somme = 0
for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i]
}

let sortedTab = tableau.sort((a, b) => a - b);


var sommePair = 0
for (let i = 0; i < tableau.length; i++) {
    if(tableau[i] % 2 === 0){
        sommePair ++
    }
}
console.log()
console.log("moyenne :",somme/tableau.length, "\nmax :", sortedTab[0], "\nmin :", sortedTab[sortedTab.length-1], "\nnombre de pairs :",sommePair) 