# REST API dokumentáció

### [Autentikáció](#authentication) <br />
### [Felhasználók](#users)
### [Fiókok](#accounts)
### [Tranzakciók](#transactions)
### [Mérföldkövek](#milestones)
### [Bevételi források](#sources)
### [Kategóriák](#categories)

## <a name="authentication"></a> Autentikáció
**Bejelentkezés**
***
* **URL**
  
  _/api/auth_

* **Method:**

  `POST`

* **Data Params**

  ```json
  {
    "email": "john@doe.com",
    "password": "johndoe"  
  }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:** 
      ```json
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDNlNWE3MGQ1NDg0OTM5ZTMzMWI1NWQiLCJsYXN0TmFtZSI6IlRlc3p0IiwiZmlyc3ROYW1lIjoiRWxlayIsImVtYWlsIjoidGVzenRAZWxlay5odSIsImxhc3RMb2dpbiI6IjIwMjEtMDMtMDJUMTU6MzM6MDAuMDAwWiIsImlhdCI6MTYxNDcwMDMxMSwiZXhwIjoxNjE0NzAzOTExfQ.cJGVrFKfWcgE6Ck6YxeHIJays-If2RBzmow8MRfK4uo",
          "user": {
            "_id": "603e5a70d5484939e331b55d",
            "lastName": "Teszt",
            "firstName": "Elek",
            "email": "teszt@elek.hu",
            "lastLogin": "2021-03-02T15:33:00.000Z"
          }
        }
      ```

* **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
            "statusCode": 401,
            "message": "Nincs felhasználó ilyen email címmel!"
        }
      ```

  OR

    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
          "statusCode": 401,
          "message": "Sikertelen bejelentkezés!"
        }
      ```
      
* **Notes:**

  _JWT expires after 1 hour._

## <a name="users"></a> Felhasználók
## <a name="accounts"></a> Fiókok
## <a name="transactions"></a> Tranzakciók
## <a name="milestones"></a> Mérföldkövek
## <a name="sources"></a> Bevételi források
## <a name="categories"></a> Kategóriák
