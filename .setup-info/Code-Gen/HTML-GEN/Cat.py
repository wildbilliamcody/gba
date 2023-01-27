myfile = open("gen\\filenames.txt", "r")
myline = myfile.readline()
countt = 1702
while myline:
    countt += 1
    myline = myfile.readline()
    myline1 = myline.replace("\n", "")
    with open("gen\gen.txt", "a") as f:
        f.write(f"""<li class="gba-filter-hide"><a href="launchpad.html" class="bar-text" onclick="gameType({countt}); setNameTxt(this);">{myline1}</a></li>\n""")