nombre = int(input('donne moi un nombre : '))
if nombre % 5 == 0 and nombre % 3 == 0 :
    print("fizzbuzz")
elif nombre % 5 == 0 :
    print("buzz")
elif nombre % 3 == 0 :
    print("fizz")
else :
    print(nombre)