myfile = open("gen\\filenames.txt", "r")
myline = myfile.readline()
gameType = "nds-alt"
while myline:
    print(myline)
    myline = myfile.readline()
    myline1 = myline.replace("\n", "',")
    with open("gen\gen.txt", "a") as f:
        # f.write(f"'../nds-host/{gameType}/{myline1}\n")
        f.write(f"'https://nds-host.nailington1.repl.co/?url=https://rawcdn.githack.com/mathadventure1/nds-host/a15becf40ff31c1f8fd57b8ca65254559311bbad/nds-host/{gameType}/{myline1}\n")