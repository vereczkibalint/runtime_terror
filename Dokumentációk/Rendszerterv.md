# Rendszerterv

## 1. Rendszer célja

Webalkalmazásunk célja, hogy megkönnyítse az emberek számára pénzügyeik kezelését és a pénztudatosság fontosságát erősítse a felhasználókban. Olyan alkalmazást szeretnénk létrehozni mely minden korosztály számára egyértelmű, letisztult, könnyen használható felületet biztosít. Lehetőséget biztosít több fiók felvételére és párhuzamos kezelésére, egyéni mérföldkövek beállítására, és különböző statisztikák (költések, bevételek) generálására.

## 2. Projekt terv

Célunk, hogy mind a 4 csapattag aktívan kivegye részét a felmerülő problémák megoldásában.

Mérföldkövek: első és legfontosabb feladat a pontos dokumentáció elkészítése, és az alkalmazáshoz tartozó képernyőtervek, adatmodellek, adatbázisterv elkészítése. Ezek után kezdődik a fejlesztés, mely az előbb említett adatok segítségével sokkal könnyebb és hatékonyabb is lesz.

## 3. Üzleti folyamatok modellje

Egy 1000 résztvevőt magába foglaló kérdőíves felmérés rámutatott, hogy szükség van egy ilyen alkalmazásra, melyet a legtöbb ember támogat, és szívesen használna is a mindennapokban.

## 4. Követelmények

Weboldalunk a tárolt adatok érzékenysége miatt különös tekintettel odafigyel, hogy megfeleljen az adatvédelmi és GDRP előírásoknak.

## 5. Funkcionális terv

A szolgáltatás használatához a felhasználó azonosítása szükséges, így a regisztráció és a belépés folyamata elengedhetetlen, amely email cím és jelszó párosítással történik.

Bejelentkezés után elérhetővé válik a felhasználó számára a vezérlőpult, ahol további menükön keresztül érheti el a fiókjait, a tranzakciók listázó oldalát, statisztikákat és a beállításait, ahol a jelszó módosításon kívül pénznem váltására is lehetősége van.

## 6. Fizikai környezet

A webalkalmazás mobile-first módszerrel készül, azaz teljes mértékben reszponzív, így asztali számítógépeken kívül mobiltelefonon is használható és elérhető egy böngésző segítségével.

- Fejlesztő eszközök és technológiák:
  - Visual Studio Code
  - JetBrains WebStorm
  - MongoDB
  - NestJS
  - React, Bootstrap