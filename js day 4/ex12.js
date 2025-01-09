var personne = {
    "nom" : "Alice",
    "age" : 30,
    "adresse" : {
        "rue" : "2 rue de l'enfer",
        "ville" : "montcuq",
        "code postal" : "46800"
    },
    "hobbies" : ["Lecture", "Natation", "Voyages"]
}
console.log(personne.nom, "\n"+ personne.age, "\n"+ personne.adresse.rue, "\n"+ personne.adresse.ville, "\n"+ personne.adresse["code postal"], "\n"+ personne.hobbies, "\n")
personne.hobbies.push("minecraft")
personne.age = 39
delete personne.adresse["code postal"];
console.log(personne.nom, "\n"+ personne.age, "\n"+ personne.adresse.rue, "\n"+ personne.adresse.ville, "\n"+ personne.hobbies, )