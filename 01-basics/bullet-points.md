# Első óra: a programozás alapfogalmai (vázlat)

Játszótér: http://jsbin.com/zobexeb/edit?console,output  
Használat közben a Console és az Output ablak legyen megnyitva, futtatáshoz "Run with JS" gomb.  

## Függvények, változók, objektumok 9 lépésben

1. Függvények
	- függvényhívás
		- `greet()`, `expect()`, `cursor()`, `noCursor()`
	- argumentumok
		- szám
		- string
		- több argumentum
		- `nyan(num)`, `alert(str)`, `balls(str, num)`
	- camelCase		
2. Változók
	- értékadás
	- számok növelése, csökkentése
	- létrehozás
	- értékadás másik változóból
	- egyenlőségvizsgálat
3. Változó mint függvényargumentum
	- `alert(company)` vs. `alert("company")`
4. Objektumok függvényei
	- `bob.left()`, `bob.right()`, `bob.jump()`, `bob.blink(num)`, `bob.say(str)`
	- `bob.jump()` vs. `jump()`
5. Objektumok változói
	- értékadás
	- értékadás másik változóból
6. Változó mint függvényargumentum: objektumok
	- `alert(bob.color)`  
	- `bob.blink(stars)`  
	`bob.say(bob.color)`  
7. Függvények visszatérési értékkel
	- `day()`, `dayName()`, `uppercase(str)`, `random(num, num)`
8. A visszatérési érték változóba menthető
	- `today = "Monday"` vs. `today = dayName()`.  
9. A visszatérési érték lehet függvényargumentum
	- `bob.say(dayName())`, `bob.blink(random(1, 5))`, `nyan(day())`  
