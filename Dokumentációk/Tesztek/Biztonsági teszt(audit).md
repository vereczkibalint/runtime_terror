Biztonsági teszt


A támadások azok a technológiák, amiket a támadók használnak, hogy kihasználják az
alkalmazások sebezhető pontjait. A támadásokat gyakran tévesztik össze a sebezhető
pontokkal. Egy támadás leírása azt mondja el, hogy mit tenne a támadó a gyengeség
kihasználására, nem pedig az alkalmazás gyenge pontjait ismerteti.
Ebben a fejezetben a legfontosabb biztonsági támadásokat ismertetjük, hogy a tesztelés
során tudjuk, minek lesz kitéve az alkalmazásunk. Ha ismerjük a biztonsági támadásokat,
akkor a tesztek során kipróbálhatjuk, hogy alkalmazásunk ellen áll-e a támadásnak. Ha igen,
akkor a kiadott szoftverünk kisebb kockázatot jelent a használójának és így nagyobb értéket
képvisel. A támadás ellenállóság egyrészt verseny előny, másrészt az elkérhető magasabb ár
fedezi a tesztelés extra költségeit. Az extra költségek a magasan képzett tesztelők magasabb
munkadíjából és a támadás ellenállóság tesztelésének viszonylag időigényes volta jelenti.
Ugyanakkor a támadás ellenállóság vizsgálatához nem elég csak a legfontosabb támadásokat
ismerni, hiszen újabb és újabb támadási módszereket fejlesztenek ki az IT rendszerek
feltörésére specializálódott hacker-ek.
A támadás ellenállóság tesztelése általában feketedobozos teszt. Történhet a rendszer
kiadása előtt vagy után is. Ha utána történik, akkor általában etikus törési kísérletről
beszélünk. Ehhez általában külső szakembereket, fehér kalapos hacker-eket szoktak felkérni.
Ha a kiadás előtt történik, akkor általában a legmagasabban képzett belső tesztmérnökök
feladata. Ez a fejezet nekik szól, de a szükséges ismereteknek csak egy részét tartalmazza.
A biztonsági támadások legfontosabb típusai (támadás fajtái – konkrét támadások):

- „Működés ellehetetlenítése – Cache Mérgezés” (Abuse of Functionality - Cache
  Poisoning )

- (Data Structure Attacks - Overflow Binary Resource fájl )
- „Ártalmas kód beágyazása – logikai/időzített bomba (Embeeded Malicious Code -
  Logic/time bomb)
-  „Trójai” (Troyan Horse)
- „Azonosítási folyamat kihasználása – Account kizárási támadás” (Exploitation of
  Authentication - Account lockout attack)
-  „Befecskendezés – Közvetlen statikus kód befecskendezése” (Injection - Direct Static
  Code Injection)
-  „Útkeresztezési támadás” (Path Traversal Attack)
-  „Próbálgatós technológiák – nyers erő támadás” (Probabilistic Techniques - Brute
  force attack)
- „Protokol manipuláció – http válasz szétválasztás” (Protocol Manipulation - Http
  Response Splitting)
-  „Forrás kimerítés – aszimmetrikus erőforrások elfogyasztása (erősítés)” (Resource
  Depletion - Asymmetric resource consumption (amplification))
-  „Erőforrás manipuláció – kémprogram” (Resource Manipulation – Spyware)
- „Szimatoló támadás – Hálózati lehallgatás” (Sniffing Attacks - Network
  Eavesdropping)
- „Átverés – oldalakon keresztüli kérelem hamisítás (CSRF)” (Spoofing - Cross-Site
  Request Forgery (CSRF))





2021.05.02
Készítette: Oravecz Zsolt

	Béta verzió megnevezése		kód		felhasználó			funkció			megjegyzés
	
	Házipénztár					001		Oravecz Zsolt	 adatbiztonság		Aki még nem rendelkezik fiókkal regisztrálnia kell.

**************************************************************************************************************************************************************************

2021.05.02
Készítette: Oravecz Zsolt


	Béta verzió megnevezése		kód		felhasználó			funkció			megjegyzés


	Házipénztár					002		Oravecz Zsolt		adatfeltöltés		adatokat csak bejelentkezés után tudtam lekérni, illetve feltölteni

************************************************************************************************************************************************************************

2021.05.02
Készítette: Oravecz Zsolt

	Béta verzió megnevezése		kód		felhasználó			funkció			megjegyzés


	Házipénztár					003		Oravecz Zsolt		adatbiztonság		Az adatokat csak akkor lehet kinyerni, ha arra jogosult felhasználó teszi. A védett adatok egy hash függvény alatt van kódolva, ezáltal nem lehet az eredetire visszafejteni.

************************************************************************************************************************************************************************

2021.05.02
Készítette: Oravecz Zsolt

	Béta verzió megnevezése		kód		felhasználó			funkció			megjegyzés

	Házipénztár					005		Oravecz Zsolt	 adatlekérés		Az adatokat csak arra jogosult kliens kérhet le.

************************************************************************************************************************************************************************

2021.05.02
Készítette: Oravecz Zsolt

	Béta verzió megnevezése		kód		felhasználó			funkció			megjegyzés



	Házipénztár					006		Oravecz Zsolt		adatfeltöltés	A szoftver jelzi, ha helytelen adatot szeretne a kliens	feltölteni, így nem áll le a program, hanem helytelen adatok után is tovább tud futni.

************************************************************************************************************************************************************************

