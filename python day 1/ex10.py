strNotes = input("donne moi les notes séparées pas des virgules")
#strNotes = "1,2,3,4"
notes = [float(note.strip()) for note in strNotes.split(",")]
moyenne = sum(notes) / len(notes)
print(f"La moyenne des notes est : ", moyenne)