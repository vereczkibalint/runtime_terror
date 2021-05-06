# Kategóriák modul teszt jegyzőkönyv

| Teszteset ID             | KategoriaLetrehozas-1                              |                      |               |
| ------------------------ | -------------------------------------------------- | -------------------- | ------------- |
| **Teszteset leírása**    | Kategória létrehozás funkcionalitásának tesztelése | **Teszt prioritása** | Fontos        |
| **Előzetes követelmény** | Regisztrált és bejelentkeztetett felhasználó       | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet               | Bemenet                                                      | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések          |
| ------- | --------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | --------------------- |
| 1       | Kategória létrehozása | owner: *abcdef*<br />name: *ab*<br />color: *xyz*            | Minden mezőre hibaüzenet. Sikertelen kategória létrehozás.   | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A kategória nem került létrehozásra. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05<br />21:01 |
| 2       | Kategória létrehozása | owner: *603e5a70d5484939e331b55d*<br />name: *Fizetés*<br />color: *#ABC* | Minden mező megfelel a követelményeknek. Sikeres kategória létrehozás.<br />Category objektum | A kategória létrehozása sikeres volt. Category objektum megérkezett a válaszban. A kategória létrehozva az adatbázisban. | Postman            | Sikeres                                  | 2021.05.05<br />21:07 |

| Teszteset ID             | KategoriaFrissites-1                                         |                      |               |
| ------------------------ | ------------------------------------------------------------ | -------------------- | ------------- |
| **Teszteset leírása**    | Kategória frissítés funkcionalitásának tesztelése            | **Teszt prioritása** | Közepes       |
| **Előzetes követelmény** | Regisztrált és bejelentkeztetett felhasználó, létrehozott kategória | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet              | Bemenet                            | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések          |
| ------- | -------------------- | ---------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | --------------------- |
| 1       | Kategória frissítése | name: *ab*<br />color: *xyz*       | Minden mezőre hibaüzenet. Sikertelen kategória frissítés.    | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A kategória nem került frissítésre. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05<br />21:12 |
| 2       | Kategória frissítése | name: *Fizetés*<br />color: *#ABC* | Minden mező megfelel a követelményeknek. Sikeres kategória frissítés.<br />Frissített category objektum | A kategória frissítése sikeres volt. A frissített category objektum megérkezett a válaszban. A kategória frissítve az adatbázisban. | Postman            | Sikeres                                  | 2021.05.05<br />21:16 |

| Teszteset ID             | KategoriaTorles-1                                            |                      |               |
| ------------------------ | ------------------------------------------------------------ | -------------------- | ------------- |
| **Teszteset leírása**    | Kategória törlés funkcionalitásának tesztelése               | **Teszt prioritása** | Közepes       |
| **Előzetes követelmény** | Regisztrált és bejelentkeztetett felhasználó, létrehozott kategória | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet              | Bemenet                                     | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések          |
| ------- | -------------------- | ------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | --------------------- |
| 1       | Kategória törlése    | URL Query:<br />/*notexistingid*            | Üres response.                                               | Üres response érkezett. Nem került törlésre egy kategória sem. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05<br />21:12 |
| 2       | Kategória frissítése | URL Query:<br />/*603e5a70d5484939e331b55d* | Sikeres kategória törlés, ha az adott felhasználóhoz tartozik.<br />Törölt category objektum | A kategória törlése sikeres volt. A törölt category objektum megérkezett a válaszban. A kategória törölve lett az adatbázisból. | Postman            | Sikeres                                  | 2021.05.05<br />21:18 |

