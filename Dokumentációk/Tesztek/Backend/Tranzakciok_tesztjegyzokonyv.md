# Tranzakciók modul teszt jegyzőkönyv

| Teszteset ID             | TranzakcioLetrehozas-1                                       |                      |               |
| ------------------------ | ------------------------------------------------------------ | -------------------- | ------------- |
| **Teszteset leírása**    | Tranzakció létrehozás funkcionalitás tesztelése              | **Teszt prioritása** | Fontos        |
| **Előzetes követelmény** | Regisztrált és bejelentkeztetett felhasználó, létrehozott fiók és kategória | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet                | Bemenet                                                      | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | ---------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Tranzakció létrehozása | account: *abcdef*<br />amount: *-2000*<br />category: *abcdef*<br />isPeriodic: *notboolean* | Minden mezőre hibaüzenet. Sikertelen tranzakció létrehozás.  | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A tranzakció nem került létrehozásra. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:32 |
| 2       | Tranzakció létrehozása | account: *6050d5a8ea2e48109ca0dd92*<br />amount: *5000*<br />category: *6050e0e3121a2e31f49e62f7*<br />isPeriodic: *true* | Minden mező megfelel a követelményeknek. Sikeres kategória létrehozás. | A tranzakció létrehozása sikeres volt. Transaction objektum megérkezett a válaszban. A tranzakció létrehozva az adatbázisban. | Postman            | Sikeres                                  | 2021.05.05.<br />21:43 |

| Teszteset ID             | TranzakcioFrissites-1                                        |                      |               |
| ------------------------ | ------------------------------------------------------------ | -------------------- | ------------- |
| **Teszteset leírása**    | Tranzakció frissítés funkcionalitás tesztelése               | **Teszt prioritása** | Közepes       |
| **Előzetes követelmény** | Regisztrált és bejelentkeztetett felhasználó, létrehozott fiók, kategória és tranzakció | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet                | Bemenet                                       | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | ---------------------- | --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Tranzakció frissítése  | amount: *-2000*<br />isPeriodic: *notboolean* | Minden mezőre hibaüzenet. Sikertelen tranzakció frissítés.   | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A tranzakció nem került frissítésre. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:48 |
| 2       | Tranzakció létrehozása | account: *12500*<br />isPeriodic: *false*     | Minden mező megfelel a követelményeknek. Sikeres kategória frissítés. | A tranzakció frissítése sikeres volt. Transaction objektum megérkezett a válaszban. A tranzakció frissítve az adatbázisban. | Postman            | Sikeres                                  | 2021.05.05.<br />21:55 |

| Teszteset ID             | TranzakcioTorles-1                                           |                      |               |
| ------------------------ | ------------------------------------------------------------ | -------------------- | ------------- |
| **Teszteset leírása**    | Tranzakció törlés funkcionalitás tesztelése                  | **Teszt prioritása** | Közepes       |
| **Előzetes követelmény** | Regisztrált és bejelentkeztetett felhasználó, létrehozott fiók, kategória és tranzakció | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet            | Bemenet                                     | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | ------------------ | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Tranzakció törlése | URL Query:<br />/*notexistingid*            | Üres response.                                               | Üres response érkezett. Nem került törlésre egy tranzakció sem. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />22:04 |
| 2       | Tranzakció törlése | URL Query:<br />/*605a14eef1206308b0b80b84* | Sikeres tranzakció törlés, ha az adott felhasználóhoz tartozik.<br />Törölt transaction objektum. | A tranzakció törlése sikeres volt.<br />A törölt transaction objektum megérkezett a válaszban.<br />A tranzakció törölve lett az adatbázisból | Postman            | Sikeres                                  | 2021.05.05.<br />22:09 |