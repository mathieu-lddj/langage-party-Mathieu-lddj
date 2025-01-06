#strListe = "2, 5,6, 17, 4, 88, 0, -6"
strListe = input("donne moi un liste de nombre à trier, les nombre doivent êtres séparés pas une virgule")
liste = [float(nombre.strip()) for nombre in strListe.split(",")]

print(sorted(liste))