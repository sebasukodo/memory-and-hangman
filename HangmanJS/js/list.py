# Dieses Programm dient nur dazu, die Wörter aus final_words.txt in Array-Form zu bringen und zu kürzen

def readMafia():
    f = open("netzmafia_woerter.txt","r")
    lines = f.readlines()
    ar = []

    zaehler = 0

    for line in lines:
        text = line.upper()[:-1]

        if zaehler > 75 and text[0]=="K":
            ar.append(text)
            print(text)
            zaehler = 0

        zaehler += 1

    #print(ar)
    #print(len(ar))

def readMathe():
    f = open("mathe_woerter.txt","r")
    lines = f.readlines()
    r = []

    for line in lines:
        text = line.upper()[:-1]
        r.append(text)

    print(r)
    print(len(r))

if __name__ == "__main__":

    readMafia()
   # print("")
    #readMathe()
   # print("")
