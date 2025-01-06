nombre = int(input("donne moi un nombre : "))
print("les resultats sont :", ", ".join(str(nombre * (i+1)) for i in range(10)))