# Első óra: a programozás alapfogalmai (vázlat)

Játszótér: http://jsbin.com/visopih/edit?console,output  
Használat közben a Console és az Output ablak legyen megnyitva, futtatáshoz "Run with JS" gomb.  

## Editor vs konzol

- code editor: szövegszerkesztő
- konzol: parancssor

## Függvények, változók, objektumok 9 lépésben

1. Függvények
	- kvázi parancsok
	- függvényhívás: zárójelekkel
		- `greet()`
		- `expect()`
		- `cursor()`
		- `noCursor()`
	- argumentumok (bemenő adatok)
		- szám, pl. `nyan(num)`
		- string, pl. `alert(str)`
		- több argumentum, pl. `balls(str, num)`
	- camelCase		
2. Változók
	- adatok elmentésére
	- értékadás: egyenlőségjellel
		+ szám, string
	- számok növelése, csökkentése
	- létrehozás
	- értékadás másik változóból
	- egyenlőségvizsgálat
3. Változó mint függvényargumentum
	- ha egy függvény argumentumot vár, adhatunk neki változót is
	- `alert(company)` vs. `alert("company")`
4. Objektumok függvényei
	- az objektum sajátja, rajta kívül nem létezik
	- ponttal írjuk az objektum neve után
		+ `bob.left()`
		+ `bob.right()`
		+ `bob.jump()`
		+ `bob.blink(num)`
		+ `bob.say(str)`
	- `bob.jump()` vs. `jump()`
5. Objektumok változói
	- pont mint a függvény
		- `bob.color`
		- `bob.wheels`
	- értékadás
	- értékadás másik változóból
6. Változó mint függvényargumentum: objektumok
	- `alert(bob.color)`  
	- `bob.blink(stars)`  
	- `bob.say(bob.color)`  
7. Függvények visszatérési értékkel
	- egyes függvények nem parancsok, inkább kérdések: válaszolnak valamit)
		- `day() --> num`
		- `dayName() --> str`
		- `uppercase(str) --> str`
		- `random(num, num) --> num`
8. A visszatérési érték változóba menthető
	- `today = "Monday"` vs. `today = dayName()`.  
9. A visszatérési érték lehet függvényargumentum
	- `bob.say(dayName())`, `bob.blink(random(1, 5))`, `nyan(day())`  
