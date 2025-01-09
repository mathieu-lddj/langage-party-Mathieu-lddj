const chaine = "10, 20, 30, 40"

let tableau = chaine.split(',').map(Number);
console.log(tableau.length); 


let nombreTotal = tableau.length;
console.log("Nombre total d'éléments : " + nombreTotal);


let somme = tableau.reduce((acc, val) => acc + val, 0);
console.log("Somme de tous les nombres : " + somme);


let moyenne = somme / nombreTotal;
console.log("Moyenne des nombres : " + moyenne);


let superieurMoyenne = tableau.filter(val => val > moyenne).length;
console.log("Nombre d'éléments supérieurs à la moyenne : " + superieurMoyenne);