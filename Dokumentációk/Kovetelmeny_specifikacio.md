# Követelmény specifikáció

## 1. Bevezetés

Mai világunkban a pénz az életünk központjában áll. A pénzhasználat elkerülhetetlen és szinte minden nap használjuk azt. Sokszor nem tudjuk mennyi bevételünk, és mennyi kiadásunk keletkezett egy adott időszak alatt. Gazdasági fejlődésünket, megtakarításainkat nagyban elősegíti ha rendelkezésünkre áll egy olyan rendszer, melyben időről időre feljegyezhetjük a pénz mozgását. 

A webalkalmazás készítésekor az a célunk, hogy a felhasználók számára megkönnyítsük a pénzügyeik (kiadások, bevételek, mérföldkövek) nyomon követését. Saját tapasztalatainkból kiindulva, néha meglehetősen problémás lehet egyes pénzügyek kezelése, szükség van egy rendezett, átlátható és könnyen kezelhető szoftverre, ahol mindent láthatunk egy helyen, részletekre bontva, grafikonokkal ábrázolva. 

## 2. Jelenlegi helyzet

Jelenleg a megrendelő egyáltalán nem vezeti, vagy időnként papíron vezeti pénzügyeit (többek között bevételeit, kiadásait), ami idő igényes, hiszen számításokat kell elvégezni, emberi tulajdonságokból adódóan hibázhatunk, olykor átláthatatlan és koránt sem tekinthető egy biztonságos megoldásnak. Gondoljunk csak bele, ha egy adatot tartalmazó dokumentum elveszik, ráömlik a kávénk, vagy egyéb okból adódóan megsemmisül. 

A módszert tekintve igen elavultnak tekinthető a XXI. században. Egyre kevesebb papírt használunk, és egyre inkább számítógépes rendszerekre bízzuk adataink nagy részét.

Egy másik emberi tulajdonság a feledékenység, megrendelőnk elmondása szerint, gyakran megfeledkezik arról, hogy lejegyezze pénzügyeit, vagy megfeledkezik kitűzött céljairól, mérföldköveiről. 

Az általunk fejlesztett szoftver értesítésekkel fenntartja a felhasználó érdeklődését és emlékezteti egyes feladataira.

## 3. Vágyálomrendszer

A szoftver elkészítésével az a célunk, hogy létrehozzunk egy mindennapi használatra alkalmas webalkalmazást, amivel bárki, korosztálytól független, egyszerűen nyomon tudja követni kiadásait, bevételeit, megtakarításait, illetve kitűzhet magának mérföldköveket, egyfajta célokat, ami motivációként is szolgálhat a cél elérése érdekében. Egyebek mellett a felhasználó különféle statisztikákat tekinthet meg a pénzmozgásról.

## 4. Jelenlegi üzleti folyamatok modellje

Manuálisan vezetni a pénzügyeket rengeteg idővel és energiával jár, ezen felül a hiba lehetősége rendkívül nagy. Ebből következik, hogy ha hiba van a kiadások, vagy a bevétel bevitelében (rossz összeget jegyez fel), a felhasználók abban a hitben élhetnek, hogy megengedhetnek maguknak valamit, amit valójában nem, és ebből komoly, hosszú távú problémák keletkezhetnek.

## 5. Igényelt üzleti folyamatok modellje

Egy 1000 résztvevőt magába foglaló kérdőíves felmérés rámutatott, hogy szükség van egy ilyen alkalmazásra, melyet a legtöbb ember támogat, és szívesen használna is a mindennapokban.

A megrendelő elvárása, hogy az alkalmazást használva egy letisztult, mégis átlátható felülettel találkozzon. Az alkalmazás használatához a felhasználóknak regisztrálni kelljen magukat, majd később betudjanak jelentkezni. Erre azért is van szükség, hogy személyre szabott információkat kapjanak, és a számítások is a saját pénzügyeiket foglalja össze. A felhasználó beállíthat napi, heti, havi vagy évi rendszerességű kiadásokat, vagy bevételeket, így nem kell észben tartania őket, a rendszer automatikusan számol velük. 

Az hosszú távú tervek, kitűzött célok elérését statisztika segítse, amellyel a felhasználó előre megtudhatja, mikor gyűjt össze annyi pénzt hogy egy célját megvalósíthassa, vagy éppen mikor telik le egy hosszabb távú kiadás sorozat, mint például egy kölcsön. 

A beállítások menüponton belül akár testre is szabhatja az alkalmazást. 

## 6. Követelménylista

| ID  |      Név      |                                                Kifejtés                                                 |
| :-: | :-----------: | :-----------------------------------------------------------------------------------------------------: |
| K1  |   Kezdőlap    |                      A felhasználó ha megnyomja, a kezdőlapra kerül átirányításra.                      |
| K2  | Regisztráció  |                              A regisztrációs felület kerül megjelenítésre.                              |
| K3  | Bejelentkezés |              A már regisztrált felhasználók bejelentkezési felülete kerül megjelenítésre.               |
| K4  |    Számlák    |            A felhasználó különféle számláit találhatja meg kilistázva, a megtakarításaival.             |
| K5  |    Kiadás     |                         A felhasználó rögzíthet egy kiadást annak részleteivel.                         |
| K6  |    Bevétel    |                   A felhasználó rögzítheti bevételét/bevételeit, annak részleteivel.                    |
| K7  | Statisztikák  |       A felületen különböző szempontok alapján kerülnek megjelenítésre statisztikák, grafikonok.        |
| K8  | Mérföldkövek  | A felhasználó ezen a felületen tudja kezelni és áttekinteni a mérföldköveit, illetve létrehozni azokat. |
| K9  |  Beállítások  |                              A beállítások felülete kerül megjelenítésre.                               |

## 7. Fogalomszótár

[bug]: fejlesztési hiba ami által a program nem a várt eredményt hozza

[main menu]: A fő menü, amely a weboldal/program indulásakor megjelenik

[backend]: A kiszolgáló, ahonnan az alkalmazást el lehet érni. A háttérben működik, így a felhasználó nem láthatja.

[frontend]: egy réteg ami feladata a rendszerből kijutó adatok prezentálása, illetve a bejövő adatok fogadása. Az a réteg, mely kapcsolatot teremt a felhasználó és a backend között.

[web-service]:különböző programnyelveken írt és különböző platformokon futó szoftveralkalmazások interneten keresztül történő adatcseréjére használt webszolgáltatások.

[multiplatform]: több környezetben futtatható alkalmazás

[main menu]: A fő menü, amely a weboldal indulásakor megjelenik

