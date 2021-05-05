# Autentikáció modul teszt jegyzőkönyv

| Teszteset ID             | Regisztracio-1                             |                      |               |
| ------------------------ | ------------------------------------------ | -------------------- | ------------- |
| **Teszteset leírása**    | Regisztráció funkcionalitásának tesztelése | **Teszt prioritása** | Fontos        |
| **Előzetes követelmény** | -                                          | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet      | Bemenet                                                      | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | ------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Regisztráció | Email: johndoe.com<br />LastName: D<br />FirstName: J<br />Password: johndoe<br />PasswordConfirm: doejohn | Minden mezőre hibaüzenet. Sikertelen regisztráció.           | Minden mezőre hibaüzenet érkezett a nem megfelelő adatok miatt. A regisztráció sikertelen volt. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />20:37 |
| 2       | Regisztráció | Email: john@doe.com<br />LastName: Doe<br />FirstName: John<br />Password: johndoe123<br />PasswordConfirm: johndoe123 | Minden mező megfelel a követelményeknek. Sikeres regisztráció.<br />User objektum, aláírt érvényes token. | A regisztráció sikeres volt. User objektum és az érvényes token megérkezett a válaszban. Felhasználó létrehozva az adatbázisban. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05<br />20:44  |

| Teszteset ID             | Bejelentkezes-1                             |                      |               |
| ------------------------ | ------------------------------------------- | -------------------- | ------------- |
| **Teszteset leírása**    | Bejelentkezés funkcionalitásának tesztelése | **Teszt prioritása** | Fontos        |
| **Előzetes követelmény** | Regisztrált felhasználó                     | **Teszt készítő**    | Somogyi Dávid |

| Sorszám | Művelet       | Bemenet                                             | Elvárt eredmény                                              | Kapott eredmény                                              | Tesztelő környezet | Eredmény                                 | Megjegyzések           |
| ------- | ------------- | --------------------------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------ | ---------------------------------------- | ---------------------- |
| 1       | Bejelentkezés | Email: john@doe.com<br />Password: notjohnspassword | Jelszó mezőre hibaüzenet. Sikertelen beléptetés.             | Jelszó mezőre hibaüzenet érkezett a nem megfelelő jelszó miatt. A belépés sikertelen volt. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05.<br />20:53 |
| 2       | Bejelentkezés | Email: john@doe.com<br />Password: johndoe123       | Minden mező megfelel a követelményeknek. Sikeres belépés .<br />User objektum, aláírt érvényes token. | A belépés sikeres volt. User objektum és az érvényes token megérkezett a válaszban. | Postman            | <span style="color:green">Sikeres</span> | 2021.05.05<br />20:57  |