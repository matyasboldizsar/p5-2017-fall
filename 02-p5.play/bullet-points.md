# Második óra: p5.play alapok (vázlat)

- koordináták, szögek 
	+ koordináták
		* origo: bal fölső sarok
		* vízszintes tengely: x, függőleges: y
		* mértékegység: képpont
		* ld.: [Photoshop vonalzó](ps-rulers.png)
		* egy pont helye: (x, y)
	+ szögek
		* 0-360
		* a Kelet a nulla, és órairányba forog
	+ gyakorlás: http://jsbin.com/medolor/
- p5 változók
	- vászon mérete: `width`, `height`
	- négy fő irány: `NORTH`, `EAST`, `SOUTH`, `WEST`
	- egér helye: `mouseX`, `mouseY`
- sprite-ok
	+ játszótér: http://jsbin.com/kadugev/edit?console,output  
	- létrehozás: `bob = createSprite()`
	- szín: `bob.shapeColor = "darkblue"`
	- törlés: `bob.remove()`
	- pozíció: `bob.position.x`, `bob.position.y`
		+ helyezzük bobot középre
	- méret: `bob.width`, `bob.height`
	- forgás: `bob.rotation`
	- a fentiek állítása randommal
	- teljes konstruktor
- megjegyzés a stílusról
