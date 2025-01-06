liste = input("ecrit un palyndrome : ")
list(liste)
revListe = liste[::-1]
if liste == revListe :
    print("ton mot est un palyndrome !")
else :
    print("ton mot n'est pas un palyndrome")
#print(liste, revListe)