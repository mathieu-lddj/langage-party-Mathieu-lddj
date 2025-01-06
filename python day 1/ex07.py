ph = input('écrit une phrase : ')
phrase = list(ph.lower)
n = 0
voyelles = ['a', 'e', 'i', 'o', 'u', 'y']
for i in phrase :
    if i in voyelles :
        n+=1
print("il y à", n, "voyelles dans ta phrase")