import random as rd 
nombre = rd.randint(1, 1000)
print(nombre)
for i in range(10):
    guess = int(input('trouve le nombre entre 1 et 1000 : '))
    if guess == nombre :
        print("bravo tu à réussi! ")
        exit()
    elif guess < nombre :
        print("nombre trop petit")
    else :
        print("nombre trop grand")
print("tu as réalisé 10 essais infructueux, tu as perdu.")