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

## JavaScript vs. p5.js

TBD

## A p5 modell

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
```
// ANIMATION

function draw() {
	bob.position.y += 10
}
```

A reakció szakasz pedig - ezúttal - egy "mouseClicked" blokkot fog tartalmazni, mert erre az eseményre szeretnénk reagálni:  
```
// REACTION

function mouseClicked() {
	bob.positon.y = 100
}
```

TODO createSprite, paintCanvas, allSprites.draw