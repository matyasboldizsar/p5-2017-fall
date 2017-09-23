# Harmadik óra: a p5 modell (jegyzet)

## JSBin használat
__Fájlok:__ A programjainkat (pontosabban a weblapokat, amikbe a programjainkat írjuk) a HTML, a CSS és a JavaScript fájl tartalmazza. Ezek közül nekünk az esetek 99%-ában csak a JS fájllal kell törődünk.  
Minden, amit ezekbe a fájlokba írunk, megmarad. Ezzel szemben mindaz, amit a konzolon csinálunk, nem változtatja meg a programot, és nem is őrződik meg: amint újratöltjük az oldalt, elveszik az, amit a konzolon csináltunk.  

__Autosave:__ JSBinen nincs székség kézi mentésre, mert a rendszer pár másodpercenként automatikusan menti minden fájlunkat. (Viszont ha szeretnénk, tudunk a fájljainkról ún. Snaposhotot, tehát pillanatfelvételt készíteni: File > Save snapshot. Ilyenkor elmentődik a jelenlegi állapot egy külön verzióként, amihez később vissza tudunk térni.)  

__Név és megnyitás:__ Egy-egy program neve az URL-ben (tehát a weboldal címében, ami a böngészőben is látható) is szereplő hatbetűs, véletlenszerűen generált "szó". Ezt mi persze nem tudjuk megjegyezni, viszont adhatunk a programunknak leírást: File > Add description. Ide szóközöket, ékezeteket, különleges karaktereket is írhatunk. Célszerű minden program megírását azzal kezdeni, hogy leírást adunk neki, mert később ez alapján tudjuk majd beazonosítani.  
A már megírt programjainkat bejelentkezés után a File > My bins menüpont alatt találjuk meg. Megnyitni dupla kattintással tudjuk őket. Ha valamelyik programra már nincs szükségünk, a leírása mellett lévő Archive feliratra kattintva tudjuk a kukába helyezni.  

__Megosztás:__ Egy JSBinen írt programot úgy tudunk megosztani valakivel, hogy egyszerűen elküldjük neki az URL-t, ahol épp dolgozunk. (Ugyanez érhető el a Share menüpont alatt is.) Bárki, aki tudja ezt az URL-t, meg tudja nézni a program forráskódját (HTML + CSS + JS), tudja futtatni a programot és meg tudja nézni az outputját, illetve tudja használni a konzolt. A kódot _átírni_ azonban csak a program létrehozója tudja.  

__Klónozás:__ Leklónozni viszont bármelyik JSBin programot le tudjuk, akár a miénk a program, akár nem. A klónozás azt jelenti, hogy készítünk róla egy másolatot, ami már a miénk, így úgy írjuk át, ahogy akarjuk.  

## Code editor
A programokat ún. code editorba írjuk, ami egy speciális szövegszerkesztő. Nincs benne semmi szövegformázási lehetőség (betűméret, betűszín, betűtípus stb.), csak egyszerűen gépelni tudunk bele. A szerkesztő azonban a különböző programozási kulcsszavak különböző színnel való kiemelésével segíti a munkánkat. Például ha egy szót időzőjelek közé teszünk, tehát stringként kezeljük, az egész szót pirosra színezi, hogy első ránézésre is jól látható legyen: stringről van szó. Ez az úgynevezett syntax highlighting.  
A szerkesztő más módokon is segít, például:  
- valahányszor kinyitunk egy időzőjelet vagy bármilyen zárójelet, a szerkesztő automatikusan kirakja a bezáró párját  
- ha a kódot nem a szövegmező bal szélére, hanem beljebb húzva kell írni, ezt a behúzást magától megteszi (ilyenre az óra folyamán később lesz példa)  
- piros x jellel és hibaüzenettel jelzi, ha hibát lát a kódunkban, például ha kifelejtettünk egy vesszőt.  

A kódszerkesztőben lehetőség van a kód úgynevezett "kikommentelésére". Egyes kódsorokat meg tudunk jelölni "kommentként", megjegyzésként. Ilyenkor ezeket a sorokat a gép meg sem próbálja lefuttatni. Ez egyrészt arra jó, hogy bizonyos parancsokat ideiglenesen "kikapcsoljunk", inaktívvá tegyünk, anélkül, hogy konkrétan ki kéne törölni őket a programból: később így könnyen újra "bekapcsolhatjuk" őket. A másik gyakori használat az, hogy a hosszúvá vagy bonyolulttá váló programba a programozó nem parancsokat, csupán önmagának szánt megjegyzéseket, emlékeztetőket ír.  
Egy sor kommentként való megjelöléséhez írjunk az elejére dupla perjelet (//). A kódszerkesztő színezéssel is jelzi, hogy a sorunk innentől nem lesz végrehajtva.  

A szerkesztő továbbá automatikusan szépre tudja formázni a kódunkat. Ez egy igen hasznos funkció, használjuk sűrűn! Az automatikus formázást a `Cmd + Shift + L` billentyűkombináció futtatja le (windowson `Ctrl + Shift + L`).  
(Megjegyzés: Safariban sajnos nem működik.)  

Megjegyzés: a kurzus weboldalán egy [táblázatban összefoglaltam](https://github.com/endreymarcell/p5-2017-spring#speciális-karakterek) a programozásban gyakran használatos speciális karaktereket, illetve hogy hol találjuk őket Apple billentyűzeteken.  

__csillagos__  
Pár további billentyűkombó érdeklődőknek:  
- Cmd + Ctrl + fel/le nyíl --> sor mozgatása fel/le  
- Cmd + D --> szó kijelölése, ismétlődően  

## JavaScript vs. p5.js (érdekesség)

Hogyan viszonyul egymáshoz a Java, a JavaScript, a Processing és a p5.js?  

A Java egy programnyelv, amiben nagyon sokféle programot lehet írni. Ha valaki Javaban programozik, az kicsit olyan, mint ha azt mondanánk, hogy valaki épp spanyolul beszél: elmondja a _hogyant_, de nem mond semmit a _mit_-ről.  
A JavaScript is egy programnyelv, ami máskor, más helyen, más céllal született, mint a Java. A nevükben hasonlítanak, és néhány szintaktikai szabályon is osztoznak (pl. függényhíváskor zárójeleket kell tenni, a stringeket idézőjelbe kell tenni, a változóknak egyenlőségjellel kell értéket adni stb.), de sok különbség is van - kicsit olyan, mint a spanyol és az olasz nyelv.  

A Processing kicsit úgy viszonyul a Java nyelvhez, mint a _Texas hold 'em_ póker a spanyol nyelvhez. Pókerezés közben is spanyolul beszél az ember, de a szótára kiegészül néhány, speciálisan a pókerre jellemző szóval, pl. Trío, Color, Full.  
A Processing után a p5.js kicsit olyan, mint spanyol után olaszol pókerezni. A nyelv hasonló, de más, viszont a póker szabályai ugyanazok - aki spanyolul tud pókerezni, az olaszul is tud, legfeljebb pár kifejezést kell megtanulnia, amik nem egyeznek meg (Tris, Colora),  

## A p5 modell

### Egy egyszerű program animációval és interakcióval

Eddig a parancsainkat egyenként, egymás után, a konzolba begépelve adtuk ki. Minden parancs kiadása után entert nyomtunk, megkaptuk az eredményt, majd kezdhettünk újabb parancsot gépelni. Mostantól a konzol helyett programozásra a kódszerkesztőt fogjuk használni (JS fül). Ide előre begépeljük a parancsokat, amik aztán folyamatosan fognak lefutni, mikor futtatjuk a programot.  
A p5.js (pontosabban eredetileg a Processing) programok működését úgy lehet jól megérteni, ha a szükséges utasításokat a következő három szakaszba rendezzük: preparáció, animáció, reakció. A preparáció szakaszba kerül minden olyan előkészület, aminek a program indulásakor egyetlen egyszer kell lefutnia; az animáció szakasz ad helyet a program mozgásának és kirajzolásának; a reakció szakaszba pedig az kerül, aminek külső esemény hatására kell bekövetkeznie.  
Vegyük a következő, igen egyszerű példaprogramot: szeretnénk, ha a képernyő tetejéről egy sprite elindulna lefelé, és folyamatosan haladni a kép alja felé, viszont ha kattintunk az egérrel, ugorjon vissza a kép tetejére. Ebben a programban a preparáció az, hogy létrehozzuk a sprite-ot (`createSprite()`) - erre mindenképp szükség van, hiszen kell a programunkba egy sprite, viszont ennek elég egyszer lefutnia, hiszen ha létrehoztuk a sprite-ot, az onnantól már megmarad. Az animáció a fenti programban azt takarja, hogy a sprite-ot mindig egy kicsit lejjebb tesszük, mint ahol eddig volt (növeljük az y koordinátáját); a reakció pedig azt fedi, hogy ha egérkattintást érzékelünk, a sprite-ot visszatesszük az eredeti magasságába, tehát visszaállítjuk az y koordinátáját a kezdőértékre.  
Itt van tehát a tervezett programunk elnagyolt vázlata:  
```JavaScript
// PREPARATION
bob = createSprite(width / 2, 100)
// ANIMATION
bob.position.y += 10
// REACTION
bob.positon.y = 100
```

Ez még nem maga a program, mert egyelőre kihagytunk egy lépcsőfokot a p5 modellből. A három nagy szakaszon belül ugyanis nem rögtön az utasítások következnek, hanem az ezeket összefoglaló utasításblokkok. Amint látni fogjuk, egy-egy szakaszon belül több utasításblokk is lehet, de egy utasításblokk csak egy szakaszban szerepelhet, sőt: az utasításblokkok neveit a p5 által előre meghatározott listából választjuk, és minden név azt is világosan jelzi, hogy az adott blokk melyik szakaszhoz tartozik.  
Ezeket a blokkokat függvényeknek nevezzük, és a `function` kulcssszóval definiáljuk őket, a következő szintaxissal:
```JavaScript
function something() {
	command1()
	command2()
}
```
A `something` helyére a függvény (vagyis az utasításblokk) neve kerül, a két kapcsos zárójel közötti sorokba pedig az ide tartozó utasításokat soroljuk fel. A kódszerkesztő ezeket a sorokat egy tabulátorral bejlebb húzza, ezzel vizuálisan megerősítve azt, hogy ezek az utasítások egy blokkba tartoznak.  

A fenti példaprogramban a preparációhoz használt utasítás a "setup" nevű blokkba kerül:  
```JavaScript
// PREPARATION

function setup() {
	bob = createSprite(width / 2, 100)
}
```

Az animációban az úgynevezett "draw" blokka írjuk az utasításokat:  
```JavaScript
// ANIMATION

function draw() {
	bob.position.y += 10
}
```

A reakció szakasz pedig - ezúttal - egy "mouseClicked" blokkot fog tartalmazni, mert erre az eseményre szeretnénk reagálni:  
```JavaScript
// REACTION

function mouseClicked() {
	bob.positon.y = 100
}
```

Ezzel le is írtuk a programunk logikáját. Sajnos van még pár parancs, amivel ki kell egészítenünk a fentieket ahhoz, hogy valóban működő programot kapjunk:  
1. A setup elején létre kell hoznunk egy vásznat, hogy aztán tudjunk mire rajzolni: `createCanvas(windowWidth, windowHeight)`.  
2. A draw elején le kell festenünk az egész vásznat fehérre, különben a mozgó sprite csíkot húz maga után: `paintCanvas("white")`.  
3. A draw végén pedig meg is kell rajzolnunk bobot, különben nem jelenik meg a vásznon: `allSprites.draw()`.  

A fenti három utasítás szinte minden programunkban szerepelni fog.  

A teljes program tehát:  

```JavaScript
// PREPARATION

function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite(width / 2, 100)
}

// ANIMATION

function draw() {
    paintCanvas("white")
    bob.position.y += 10
    allSprites.draw()
}

// REACTION

function mouseClicked() {
    bob.positon.y = 100
}
```

(A dupla perjellel kezdődő sorok csak megjegyzések, "kommentek" a programban, tehát nem szükségesek a program futásához. Azokat csak magunknak írjuk oda a jobb érthetőség végett.)  

### Egeret követő sprite

Következő feladat: rajzoljunk egy sprite-ot, ami folyamatosan követi az egeret, és ha lenyomunk egy billentyűt, változzon egy kicsit szélesebbé, mint amilyen eddig volt.  

Próbáljuk meghatározni ennek a programnak az utasításait szakaszonként. A preparáció során biztosan létre kell hozni egy sprite-ot. A létrehozás helye viszont ezúttal mindegy, hiszen úgyis mindjárt oda fogjuk tenni, ahol az egér van:  
`bob = createSprite()`  

Az animáció azt fogja takarni, hogy bobot újra és újra oda helyezzük, ahol az egér van. Hogy lehet ezt megoldani? A p5.js speciális változó segítségével, egész pontosan a `mouseX` és a `mouseY` változók használatával, amik minden pillanatban megmondják, hol van éppen az egér:  
```JavaScript
bob.position.x = mouseX
bob.position.y = mouseY
```

A reakció pedig a szélesség (tehát a sprite `width` változójának) növekedése:  
`bob.width += 10`  

Ezzel meg is vannak az utasításaink. Helyezzük őket függvényekbe (utasításblokkokba) úgy, hogy ne felejtsük ki az előző programban is látott néhány kötelező utasítást.  
Preparáció:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
}
```

Animáció:
```JavaScript
function draw() {
    paintCanvas("white")
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}
```

A reakció most nem egérkattintásra, hanem billentyűnyomásra történik, ezért a `mouseClicked` helyett most a `keyTyped` nevű blokkba kell írnunk:  
```JavaScript
function keyTyped() {
    bob.width += 10
}
```

Tehát a teljes program:  
```JavaScript
function setup() {
    createCanvas(windowWidth, windowHeight)
    bob = createSprite()
}

function draw() {
    paintCanvas("white")
    bob.position.x = mouseX
    bob.position.y = mouseY
    allSprites.draw()
}

function keyTyped() {
    bob.width += 10
}
```

#### Kísérletek

Mi történik, ha a draw-ban felcseréled a `mouseX`-et és a `mouseY-`t? Mi történik, ha `mouseX` helyett `width - mouseX`-et, `mouseX * 2`-t, `mouseX / 2`-t írsz?  

## Feladatok

1. Írj egy programot, amiben egy sprite folyamatosan forog (ehhez a sprite `rotation` változóját tudod használni), és egérkattintásra egy kicsit jobbrább megy, mint ahol épp van.  
2. Írj egy programot, amiben egy sprite folyamatosan növekszik, billentyűnyomásra pedig egy véletlen helyre ugrik a vásznon (`random()` függvény), és visszanyeri az eredeti, 100*100-as méretét.  
3. Írj egy programot, amiben egy sprite minden billentyűnyomásra kicsit jobbra fordul, és minden kattintásra oda ugrik a vásznon, ahol épp az egér van.  
4. Írj egy programot, amiben létrejön egy sprite a vászon közepén, aminek az aktuális méretét (szélességét és magasságát) mindig az egér aktuális x koordinátájára állítod, az aktuális fordulatát pedig az egér y koordinátájára.  
5. Írj egy programot, amiben egy sprite minden pillanatban véletlenszerű helyre ugrik, de most kivételesen ne fesd fehérre a vásznat az animáció egyes lefutásai között. Ha ez megvan, írd meg, hogy kattintásra fehérre színeződjön a vászon.  
