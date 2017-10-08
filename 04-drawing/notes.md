# Negyedik óra: grafika (jegyzet)

## Statikus rajzok

### Elmélet: festék és vászon

A rajzolás p5-ben - ugyanúgy, mint Paintben - a vászonra kent festék elvén működik. Először szerezni kell egy vásznat, aztán arra tudunk különböző színű festékekkel festeni. Amit a vászonra festettünk, az már rajta marad, nem lehet utólag elmozdítani, átméretezni vagy eltüntetni. A későbbi festések "felülírják" a korábbiakat, tehát felül tudjuk festeni a korábbi rajzunkat. Ha tiszta vászonnal szeretnénk indítani, egyszerűen lefestjük az egész vásznat egyszínűre (pl. fehérre).  

### A vászon létrehozása

```JavaScript
createCanvas(windowWidth, windowHeight)
```

A program elején a vásznat a `createCanvas()` függvénnyel kell létrehozni. Ebben meg kell adni a vászon méretét is (szélesség és magasság, képpontban). Pl. `createCanvas(800, 600)` egy 800*600-as vásznat hoz létre. Tipikusan azt szeretnénk, ha a vászon kitöltené a rendelkezésére álló teret, tehát az egész ablakot. Az ablak méretét a `windowWidth` és a `windowHeight` változók tárolják. (Ezen a ponton még nem tudjuk a `width` és a `height` változókat használni, mert azok nem az ablak, hanem a vászon méreteit adják meg - a vásznat pedig épp most próbáljuk létrehozni.)  

### A vászon törlése (lefestése)

```JavaScript
paintCanvas("white")
```

A `paintCanvas()` függvény az egész vásznat a megadott színűre színezi. A színeket [ebből a listából](https://www.w3schools.com/cssref/css_colors.asp) tudjuk kiválasztani (google-lel rá kell keresni arra, hogy "css colors").

### Pontok és vonalak

Ha egy pontot szeretnénk tenni a vászonra, a `point()` függvényt kell meghívni a pont x és y koordinátájával:  
```JavaScript
point(100, 200)
point(width / 2, height / 2)
```

Ha vonalat akarunk húzni két pont között, a `line()` függvényt hívjuk meg négy koordinátával: az első pont x és y, majd a második pont x és y:  
```JavaScript
line(100, 200, width / 2, height / 2)
```

A pont/vonal színét a `stroke()` függvénnyel tudjuk beállítnai, amit még a rajzolás _előtt_ kell meghívni:  
```JavaScript
stroke("blue")
line(200, 400, width / 2, height / 2)
```

Ha nagyobb pontot, illetve vastagabb vonalat akarunk, akkor pedig a `strokeWeight()` függvényt kell hívnunk:  
```JavaScript
strokeWeight(10)
line(100, 400, 400, 400)
```


#### Feladatok
1. Rajzolj egy nagy :/ fejet a vászon közepére vastag, szürke vonalakkal!  
2. @ Rajzolj vonalkodót különböző vastagságú függőleges vonalakból! (Illetve a vastagabb csíkokat csinálhatod több, egymás mellé rajzolt, egy képpont széles vonalból is.)  

### Alakzatok

Téglalapokat a `rect()` függvény rajzol, melynek négy bemenő adata: a téglalap bal felső sarkának x és y koordinátája, a téglalap szélessége és magassága:  
```JavaScript
rect(100, 100, 400, 100)
```

Kört a `circle()` függvénnyel tudunk rajzolni, aminek a kör középpontját (x és y koordináta), illetve az átmérőjét kell megadni:  
```JavaScript
circle(width / 2, height / 2, 150)
```

A téglalap és a kör keretének színét, illetve a keret vastagságát szintén a `stroke()` és a `strokeWeight()` függvények állítják, mint a vonalakét. Ennek a körben például 5px széles, piros kerete van:  
```JavaScript
stroke("red")
strokeWeight(5)
circle(300, 300, 200)
```

Az alakzatok belsejének színét pedig a `fill()` ("kitöltőszín") állítja:  
```JavaScript
fill("chocolate")
rect(400, 100, 20, 120)
```

Ha azt szeretnénk, hogy az alakzat ne legyen semmilyen színnel kitöltve, hanem csak kerete legyen, azt a `noFill()` függvénnyel érhetjük el:  
```JavaScript
noFill()
circle(widht / 2, height / 2, 300)
```

A keretet hasonló módon a `noStroke()` kapcsolja ki.  

#### Feladatok
3. Rajzolj a :/ köré egy kört, hogy tisztességes smiley legyen!  
4. @ Rajzolj egy autót két téglalapból és két körből!  
5. @ Rajzold meg az olimpiai karikákat!  

### Szöveg

Szöveg írása a vászonra:  
```JavaScript
text("redrum", 300, 200)
```
ahol a stringet követő két szám a szöveg bal felső sarkának x és y koordinátája.  
Ha a szöveget középre szeretnénk igazítani, pl. mert a vászon közepére szeretnénk írni:  
```
textAlign("center")
text("Stuck in the middle with you", width / 2, height / 2)
```

A szöveg méretét a `textSize()` függvény állítja:  
```JavaScript
textSize(32)
```

Betűtípust pedig a `textFont()` választ:  
```JavaScript
textFont("Comic Sans MS")
```

Ezeket természetesen a szöveg beírása (`text()`) előtt kell kiadni.  

A szöveg is alakzatnak számít, tehát lehet a keretének és a belsejének a színét változtatni. Általában érdemes a keretet kikapcsolni (`noStroke()`) és csak töltőszínt választani (`fill()`):  
```JavaScript
noStroke()
fill("firebrick")
text("another brick in the wall")
```

#### Feladatok
6. Írd a smiley fölé, hogy "Legalább annyira szeretem a korai kelést, mint", és alá hogy "a sós kólát", vagy amit jónak találsz.  
7. @ Írd a képernyőre nagy-nagy sárga betűkkel, hogy "CHEESE", aztán fehér körökkel "lukaszd ki" itt-ott, mintha ementáli lenne.  

## Mozgó rajzok

TBD

