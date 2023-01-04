myfile = open("gen\\filenames.txt", "r")
myline = myfile.readline()
gameType = "nds-alt"
while myline:
    print(myline)
    myline = myfile.readline()
    myline1 = myline.replace("\n", "',")
    with open("gen\gen.txt", "a") as f:
        f.write(f"'../nds-host/{gameType}/{myline1}\n")