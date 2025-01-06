import random as rd
nombre = rd.randint(0,100)
print(nombre)
guess = -1
while guess != nombre :
    guess = int(input("guess le nombre entre 1 et 100 : "))
    if guess < nombre :
        print('nombre trop petit.')
    elif guess > nombre:
        print('nombre trop grand.')
    else : 
        pass
print("bravo, tu à trouvé le bon nombre :", nombre)