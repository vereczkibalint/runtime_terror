Tesztelési terv 

Program neve

Minősítés: (állapot)
(tervezet, jóváhagyott, stb.)			
Verziószám:					V1.0
Projekt név:					Házipénztár
Utolsó mentés kelte:				2021.05.04
Dokumentum célja:				Tesztterv elkészítése

 





1	Bevezetés

Ebben a fejezetben a tesztterv célja, hatóköre és felépítése található.


A tesztelési terv célja stb..

1.2	Elvárások

 Az alábbi alap elvárások képezik ennek a teszttervnek az alapját:
•	Az olvasó ismeri az alapdokumentumokat, amelyek meghatározzák a rendszert. 
•	Az szervezeti projektcsapat felelős a tesztadatok előállításáért.  
•	A tesztprogram az ebben a dokumentumban meghatározott tesztterv alapján fut. 

2	Szükséges erőforrások

Ez a fejezet a teszteléshez szükséges erőforrásokat fejti ki. 
2.1	Feladatkörök és felelősségek (Házipénztár tesztcsapat)

Feladatkörök és felelősségek

Back-end: Vereczki Bálint, Somogyi Dávid

Front-end:  Bessenyei Ferenc, Oravecz Zsolt



2.2	Tesztkörnyezet

Ebben a részben meg kell határozni, hogy a tesztelés milyen környezetben történjen (fejlesztői vagy tesztkörnyezet), a környezetek hogyan érhetőek el, továbbá a tesztelők milyen hozzáféréssel végezzék a tesztelést.



2.3	Tesztadatok

A teszt végrehajtásához szükséges rekordok (tesztadatok) száma: xxx
A tesztadatok elkészítéséért és feltöltéséért felelős személy: xxx

A tesztadatoknak az alábbi követelményeknek kell megfelelniük:
	Az alapadatok értékkészlete az éles rendszerrel megegyező kell, hogy legyen.


2.4	Leszállítandó teszt dokumentumok






2.5	Tesztelési eszközök

	…hordozható számítógép
	…számítógép(PC)

****************************************************************************************************
3	Tesztelési terv

Ez a fejezet leírja a teszt típusát, a metodológiáját és a riport készítés módszerét. Emellett meghatározza a teszt elvárásokat, a teszt-esetek elvárt eredményeit, sikerességének kritériumait, a kockázatok kezelését és a hatáskörön kívül eseteket.
3.1	Fejlesztői teszt

A fejlesztői tesztelés célja a rendszer alapvető funkcióinak ellenőrzése, a hibakezelés és az alapvető funkciók működésének vizsgálata. Módszere:

Teszt kódja		Funkció			Teszter			Dátum		Megjegyzés
000			bejelentkeztetés	....		2021.05.02	a login rész kiválóan működik
											hamis adatokkal használhatatlan 
											a szoftver összes funkciója

001			adatbevitel		    ....	2021.05.02	Az adatbevitel részben volt sikeres,
											melynek apróbb hibáit sikerült kijavítani





*************************************************************************************************
3.2	Prototípus (modul) teszt

A prototípustesztelés (vagy másik nevén modultesztelés) célja a rendszer már működő moduljainak önálló tesztelése, a modulon belüli hibák azonosításának és kiküszöbölésének érdekében. Módszere:

A prototípusunk unit tesztelésen esett át, melyben főbb feladatunk volt,


tesztelve:
- Windows PC
- Windows notebook
**********************************************************************************************

3.3	Integrációs teszt

Az integrációs teszt célja a rendszer más rendszerekhez történő illesztésének vizsgálata, a több rendszereken keresztül átívelő
funkciók tesztelésének érdekében. Az adatmigrációs tesztelés az integrációs teszteléshez tartozik, ennek lényege, hogy a
bevezetendő rendszerbe áttöltik azokat az adatokat, amelyekkel a rendszer dolgozni fog és letesztelik a betöltött adatok, illetve
az adatokat kezelő funkciók helyességét. Módszere:


**************************************************************************************************

3.4	Elfogadási teszt

Az elfogadási teszt (angolul User Acceptance Test) célja a rendszer teljes funkcionalitásának vizsgálata a felhasználók szemszögéből. Módszere:


************************************************************************************************************************************************
3.5	Terheléses teszt 
A terheléses teszt célja a tervezett kapacitások, valamint a rendelkezésre álló növekedési potenciál meghatározása. Módszere:

	kód		teszter				mellék		megjegyzés


​	





************************************************************************************************************************************************
3.6	Biztonsági teszt (audit)

Biztonsági tesztelésre akkor van szükség, ha a rendszer szenzitív (pl. személyes vagy pénzügyi) adatokat kezel, vagy szabadon elérhető az internetről. Módszere:



	Béta verzió megnevezése		kód		felhasználó			funkció			megjegyzés


​	


************************************************************************************************************************************************
3.8	Tesztelési feladatok, teszt-esetek leírása

A tesztelési feladat a következő teszt-eseteket foglalja magában:
?	…A tesztek sikeresek voltak
?	Hibát nem észleltünk, minden teszt elvárásainknak eleget tett
?	…Funkciók szempontjából hibák nem jelentkeztek



3.9	Tesztelési ütemterv, függőségek – tesztforgatókönyv

A teszt elvégzésének meghatározott sorrendjét és függőségeit tesztforgatókönyvben kell rögzíteni. A tesztforgatókönyv elkészítése a tesztelések koordinálásért
felelős szakértő feladata, elkészítése során törekedni kell a párhuzamos elvégezhető tevékenységek lehetőség szerinti kihasználására, a tesztelési időigény
csökkentésének érdekében. A tesztforgatókönyvben rögzíteni szükséges továbbá a tesztelés sorrendjét és a tesztelés logikáját (funkciók vagy folyamatok alapján) is.


4	Tesztelési jegyzőkönyv és tesztelési jelentés


4.1	Tesztelési jegyzőkönyv




************************************************************************************************************************************************


4.2	Tesztelési jelentés




************************************************************************************************************************************************
4.3	Tesztelt elvárások 

Az alábbi funkcionális elvárások szerepelnek az üzleti illetve fejlesztői specifikációban, amelyek tesztelésre is kerültek: 

#	Leírás
1.	védelmi intézkedések
2.	Megbízhatóság
3.	Skálázhatóság
4.	A tranzakciók integritása
5.	Biztonság és teljesítmény
6.	Helyreállítás
	
	

Az alábbi nem-funkcionális elvárások szerepelnek az üzleti illetve fejlesztői specifikációban, amelyek tesztelésre is kerültek: 

#	Leírás
1.	Szakértelmi megszorítások
2.	A működési környezet
3.	
4.	

Az alábbi elvárások szerepelnek az üzleti illetve fejlesztői specifikációban, amelyek nem kerültek tesztelésre: 

#	Leírás
1.	beégetett adatok
2.	szoftverfrissítési lehetőségek
3.	
4.	


************************************************************************************************************************************************

4.4	Elfogadási kritériumok

A teszt sikerességének kritériumai:
?	Technikai, a teszt forgatókönyvben leírtak szerint. 
?	A projekt menedzser jóváhagyása a teszt leszállítandókra. 
4.5	Kockázat kezelés

#	Kockázat				Hatás(magas/közepes/alacsony)								A kockázat kezelésének módja
1.	dinamikus adat bővülés				magas										feltöltött 1000 adat gyors és biztonságos elérésű volt

2.	hibás adatokkal való regisztrálás		magas										a szoftver minden hibát képes lekezelni,
																	ami a program futása során keletkezhet

3.	szoftver terhelés				közepes										a szoftver lassabban működik 30MB-nál több adattal



