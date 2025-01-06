import string
import random as rd
characters = string.ascii_lowercase + string.ascii_uppercase + string.digits + string.punctuation
mdpLen = int(input("nombre de charactères du mot de passe : "))
mdp = ""
for i in range(mdpLen):
    mdp += characters[rd.randint(0, len(characters))]
print(mdp)