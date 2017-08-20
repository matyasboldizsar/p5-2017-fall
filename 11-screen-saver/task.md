# Kilencedik: saját képernyőkímélő

## Visszajelzés a félévről  
TBD

## Képernyőkímélő-ötletek

### Matrix rain
Írj egy programot, ami a mátrixos betűesőt rajzolja meg.  
(Ez a program elég rövid, de több olyan dolog is van benne, amit órán nem tanultunk.)  

Ebben a programban egy nagy trükk van: a sprite helyén nem színes négyzetet vagy betöltött képet kéne mutatni, hanem odaírni egy betűt (kezdésnek például mindig csak egy "M" betűt). Ennek a megvalósítását ld. az ötödik óra jegyzet végén.  
Ha megvan egy sprite-od, aminek betű-alakja van, állítsd a hátteret feketére, a betűt világoszöldre, és mozgasd felülről lefelé. Mivel a betűk nem folyamatosan haladnak, hanem soronként ugrálnak lefelé, ezért ehhez most nem `setSpeed()` kell, hanem neked kell kézzel mindig megnövelni az y-koordinátáját. Ha ez megvan, a `frameRate()` függvénnyel állítsd be a megfelelő sebességet, és a `background()` megfelelő használatával oldd meg a betű halványodását.  
Írd meg azt is, hogy a sprite a vászon tetejéről, random szélességről induljon, és azt is, hogy ha túlment a vászon alján, ugorjon megint a tetejére, de random szélességre.  
Ahhoz, hogy megkapd a mátrixos betűket, add hozzá [ezt a pár sort](https://gist.github.com/endreymarcell/64daa231b853cae5a164fa3fde9da2fa) a setup-hoz. Ennek eredményeképpen lesz egy `letters` nevű tömböd, amit át tudsz adni a `random()`-nak, hogy véletlen betűt válasszon belőle a betű kirajzolása előtt.  
Ha ez is kész, már csak sokszorozni kell. Csinálj egy helyett sok sprite-ot (for ciklus a setupban), és mindegyik viselkedjen ugyanúgy (for ciklus a draw-ban). Ahhoz, hogy ne egyszerre induljanak el a vászon tetejéről, létrehozáskor ne pont a vászon tetejére tedd őket, hanem random magasságba valamivel a vászon teteje fölött (negatív y-koordináta). Ugyanez történjen, mikor kimennek a vászon alján.  

### Akvárium

Írj egy programot, amiben halak úszkálnak és buborékok lebegnek egy akváriumban.  
(Ez a program elég hosszú, cserébe kevesebb újdonságot tartalmaz.)  

Csinálj egy hal-sprite-ot, ami a vászon egyik szélén kívül indul random magasságban, átúszik a túloldalra, és ha kiúszott a vászonról, ismét átkerül az előző szélre, random magasságba.  
Ha ez megvan, csinálj belőle többet (csoport és for ciklus a setupban) és állítsd be, hogy ugyanúgy viselkedjenek (for ciklus a draw-ban). A sprite-ok `scale` változójának random állításával elérheted, hogy különböző méretűek legyenek (ld. az online referenciát vagy a kisokost). Ne pont a vászon széléről indítsd őket, hanem random egy kicsit arrébbról, hogy különböző időben ússzanak be.  
Ha ez megvan, hasonló módon csináld meg a buborékokat is. A viselkedés gyakorlatilag megegyezik (csoport, for ciklus, beúszás, scale stb.) csak nem vízszintesen, hanem függőlegesen haladjanak.  
Extraként beleírhatod, hogy a halak ne egyenletes sebességgel ússzanak, hanem induljanak el, álljanak meg, álldogáljanak egy darabig, megint ússzanak előre egy kicsit stb. Ehhez az kell, hogy ne kapjanak sebességet létrejöttükkor, csak valamennyi súrlódást, és a draw-ban kapjanak néha sebességet - de csak néha. Egyrészt csak akkor, ha, teszemazt, épp hatost dobunk egy kockával (random és társai), továbbá csak akkor, ha a hal épp nem mozog. Gondolkodtatónak jó lesz.  

### Az éjszaka csodái

Írj egy programot éjszakai házakkal, pislákoló ablakokkal, átúszó felhőkkel, kutyaugatással, autókkal...  
(Ebben a programban kevés a sprite és sok a rajzolás.)  

Rajzolj sötétkék háttérre épületeket világító ablakkal. (Mindez mehet `fill()` és `rect()` megfelelő kombinációjával.) Az égen legyen hold (image), és ússzon át rajta felhő (sprite).  
Extrák (válogass közülük tetszés szerint):  
* A hold és a felhő legyenek félig átlátszóak (`tint()`).  
* A felhő, ha átért a vászon egyik oldaláról a másikra, induljon el újra az egyikről (if-fel teszteld, hogy kiment-e a vászonról, és állítsd vissza az x koordinátáját).  
* Időnként hallatsszon kutyaugatás. Az "időnként" részt úgy tudod megoldani, hogy a program indulásakor egy számlálót beállítasz egy nagy random számra (százas nagyságrend), a draw-ban mindig csökkented eggyel, és megnézed, elérte-e már a nullát. Ha elérte a nullát, játsszd le az ugatás-hangot (az előző órai gyűjteményben találsz hozzá hangfájlt), és állítsd a számlálót megint egy nagy véletlenszámra. (Ne felejtsd el, hogy a hangfájlok lejátszásához kelleni fog a p5.sound plugin importálása a HTML fájlban.)  
* Az egyik ablakban időnként kapcsolódjon fel és le a villany. Ez hasonlít a kutyaugatáshoz annyiban, hogy egy számlálóval érdemes visszaszámolni, és nullánál váltani. Viszont mivel itt nem mindig ugyanazt kell csinálni, mint a kutyaugatásnál, hanem felváltva le- és felkapcsolni a lámpát, kelleni fog még egy változó, amiben számon tartod, hogy épp fel vagy le van kapcsolva. A draw függvényben ennek az ablaknak a megrajzolása függjön ettől a változótól (if). Továbbá ha a számláló elérte a nullát (if), nézd meg, mi éppen a lámpa állapota (még egy if az előzőn belül), és ha fel van kapcsolva, kapcsold le, ellenkező esetben kapcsold fel. (Segítség: hasonló programot írtunk már, csak nem számlálóval, hanem egérkattintással.)  
* Időnként hajtson el egy autó a házak előtt. Ez is egy sprite, ami a felhőkhöz hasonlóan működik: ha átért a vásznon, vissza kell állítani az x koordinátáját. Hogy legyen némi idő az autó elhajtásai között, és ne folyamatosan hajtson át újra meg újra a vásznon, állítsd az x koordinátáját bőven a vásznon kívülre, hogy sokáig tartson, míg újra beér.  
* Ha a holdat és a felhőket korábban `tint()`-tel átlátszóvá tetted, akkor most az autó is átlátszó lesz - oldd meg, hogy ez ne legyen így. Ehhez csinálj egy csoportot, tedd bele az autó-sprite-ot, az összes sprite-ot megrajzoló parancs után add ki újra a `tint()` parancsot átlátszóság nélkül, és hívd meg a rajzolást az autós csoportra is.  
* Mikor az autó áthajt a vásznon, játssz le autóhangot.  


### Csápolás
Írj egy programot, ami látványos, színes Bezier-görbéket rajzol.  
(Ebben a programban sok a sprite és kevés a rajzolás.)  

Hozz létre négy sprite-ot random helyen. Rajzolj rájuk egy Bezier-görbét a `bezier()` függvénnyel, ami nyolc számot vár: konkrétan négy pont koordinátáit. Ebből már láthatod, hogy fog működni a program.  
A vonalvastagságot állítsd jó nagyra, a vonal színét pulzáltasd, hogy folyton változzon, és adj neki némi átlátszóságot. Adj hozzá a programhoz négy fal-sprite-ot a vászon négy szélén, tedd őket egy fal-csoportba. A négy pont-sprite-ot tedd láthatatlanná (`visible` változó), adj nekik random sebességet, és pattintsd le őket a falakról.
Ha minden szuper, csinálj még 8 sprite-ot, és belőlük még két csápot.  
Extra: a pont-sprite-ok mozgását ne csak a kezdeti random irányú sebesség döntse el, hanem menet közben is változtasd egy kicsit a mozgásukat. Ehhez tedd őket csoportban a setupban és manipuláld őket tetszőleges a draw-ban (véletlen sebesség hozzáadása, sebesség korlátozása, vonzáspoint stb.).  

### Pasziánsz
Írd meg a windowsos pasziánsz-program végén látható pattogó kártyás animációt.  
(Ez a program nem túl nehéz, cserébe nem is túl könnyű.)  

[Itt egy preload](https://gist.github.com/endreymarcell/bba7ff307d22d408e90962777bd431cf), hogy ne kelljen a képek keresésével időt tölteni. Az összes képet egy `images` nevű tömbbe töltöttem, amit ugyanúgy lehet indexelni, mint a csoportokat (tehát pl. `images[0]` az első kép).  
Két darab sprite-ra lesz szükséged, az egyik a padló, amiről vissza lehet pattanni, a másik a mindenkori aktuális kártya. Az utóbbinak add alakul az első kártya képét, és dobd el a képernyő tetejéről kicsit ferdén, illetve a draw-ban állítsd neki gravitációt és visszapattanást a földről. Hogy mindig kicsit kevésbé pattanjon vissza, állítsd be a setupban a rugalmasságát.  
Írd meg, hogy ha a kártya kipattogott a képből, akkor felveszi a második kártya-képet alakul, és újra elindul ugyanonnan, a vászon tetejéről. Az indulási sebessége legyen véletlenszerű, az iránya pedig random módon vagy 215, vagy 325. A kártyákon való végighaladást úgy célszerű csinálni, hogy a program elején csinálsz magadnak egy számolásra használatos változót, nulláról indítod, és mindig megnöveled, mikor a kártya-sprite elhagyta a vásznat. Ezt a változót utána használhatod indexként, mikor a képek tömbjéből beállítod a megfelelő képet a sprite-nak.  
Ha azt is szeretnéd, hogy a kártyát ne ugyanonnan induljanak, hanem négy pakliból, ahogy a játékban is, használd ezt a képletet a sprite induló x-koordinátájának kiszámolására: `width - 380 + (num % 4) * 100` (ahol `num` a számláló változó). A program indulása előtt rajzold is oda a négy királyt a négy pakli tetejére.  
