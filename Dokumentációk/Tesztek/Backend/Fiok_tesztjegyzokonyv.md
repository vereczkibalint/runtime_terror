# Fiókok modul teszt jegyzőkönyv

| Teszteset ID             | Fiok-letrehozas-1                         |                      |                        |
| ------------------------ | ----------------------------------------- | -------------------- | ---------------------- |
| **Teszteset leírása**    | Fiók létrehozás funkcionalitás tesztelése | **Teszt prioritása** | Fontos                 |
| **Előzetes követelmény** | Regisztrált, belépett felhasználó         | **Teszt készítő**    | Vereczki Bálint Zoltán |

| Sorszám | Művelet                                       | Bemenet                                                      | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | --------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Fiók létrehozása helytelen bemeneti adatokkal | owner: abcdef<br />type: paypal<br />name: a<br />color: #xyz<br />balance: 0 | Minden mezőre hibaüzenet. Sikertelen fiók létrehozás.        | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A fiók létrehozása sikertelen volt. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:08 |
| 2       | Fiók létrehozása helyes bemeneti adatokkal    | owner: 603e5a70d5484939e331b55d<br />type: bank<br />name: OTP<br />color: #efefef<br />balance: 5000 | Minden mező megfelel a követelményeknek. Sikeres fiók létrehozás.<br/>Fiók objektum. | A fiók létrehozása sikeres volt. Fiók objektum megérkezett a válaszban. Fiók létrehozva az adatbázisban. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:15 |

| Teszteset ID             | Fiok-frissites-1                                    |                      |                        |
| ------------------------ | --------------------------------------------------- | -------------------- | ---------------------- |
| **Teszteset leírása**    | Fiók frissítés funkcionalitás tesztelése            | **Teszt prioritása** | Fontos                 |
| **Előzetes követelmény** | Regisztrált, belépett felhasználó, létrehozott fiók | **Teszt készítő**    | Vereczki Bálint Zoltán |

| Sorszám | Művelet                                      | Bemenet                                                      | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | -------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Fiók frissítése helytelen bemeneti adatokkal | type: paypal<br />name: a<br />color: #xyz<br />balance: 0   | Minden mezőre hibaüzenet. Sikertelen fiók frissítés.         | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A fiók frissítése sikertelen volt. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:20 |
| 2       | Fiók frissítése helyes bemeneti adatokkal    | type: cash<br />name: Készpénz<br />color: #f6f6t6<br />balance: 10000 | Minden mező megfelel a követelményeknek. Sikeres fiók frissítés.<br/>Frissített fiók objektum. | A fiók frissítése sikeres volt. Frissített fiók objektum megérkezett a válaszban. Fiók frissítve az adatbázisban. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:25 |

| Teszteset ID             | Fiok-torles-1                                       |                      |                        |
| ------------------------ | --------------------------------------------------- | -------------------- | ---------------------- |
| **Teszteset leírása**    | Fiók törlés funkcionalitás tesztelése               | **Teszt prioritása** | Fontos                 |
| **Előzetes követelmény** | Regisztrált, belépett felhasználó, létrehozott fiók | **Teszt készítő**    | Vereczki Bálint Zoltán |

| Sorszám | Művelet                                   | Bemenet                                  | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | ----------------------------------------- | ---------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Fiók törlése helytelen bemeneti adatokkal | URL Query<br />/notexistingid            | Üres válasz. Az adatbázisban nem történik változás.          | Üres válasz érkezett, az adatbázisban nem módosult egyik adat sem. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:32 |
| 2       | Fiók törlése helyes bemeneti adatokkal    | URL Query<br />/603e5a70d5484939e331b55d | Törölt fiók objektum. A fiók törlésre kerül az adatbázisból, ha az az adott felhasználóhoz tartozik. | A fiók törlése sikeres volt. A törölt fiók objektum megérkezett a válaszban. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />21:40 |