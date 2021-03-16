# REST API dokumentáció
## **API endpoint:** _/api/_
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

  _/auth/login_

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

**Regisztráció**
***
* **URL**

  _/auth/register_

* **Method:**

  `POST`

* **Data Params**

  ```json
  {
      "lastName": "Vezeteknev",
      "firstName": "Keresztnev",
      "email": "email@gmail.com",
      "password": "jelszo",
      "passwordConfirm": "jelszoMegerositese"
  }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MDQ3OTBlNTQxOTA4OTBmOTA5NzM2ZWIiLCJsYXN0TmFtZSI6ImpvanV6ZXIiLCJmaXJzdE5hbWUiOiJsZXN6IiwiZW1haWwiOiJqb2p1emVyQGxlc3ouaHUiLCJpYXQiOjE2MTUzMDI4ODYsImV4cCI6MTYxNTMwNjQ4Nn0.tjKGhyzGjrB0FYPz92blDo9cXS3bcpyBUHmhRJt_tgg",
          "user": {
              "_id": "604790e54190890f909736eb",
              "lastName": "Vezeteknev",
              "firstName": "Keresztnev",
              "email": "email@gmail.com"
          }
        }
      ```

* **Error Response:**
    * **Code:** 400 BAD REQUEST <br />
      **Content:**
      ```json
        {
          "message": "Sikertelen bejelentkezés!",
          "errors": [
            {
              "errorPath": "errorPath",
              "message": "errorMessage"
            }   
          ]   
        }
      ```

* **Notes:**

  _JWT expires after 1 hour._ <br />
  _User will be automatically logged in after a successful register._

## <a name="users"></a> Felhasználók
## <a name="accounts"></a> Fiókok
**Fiókok lekérdezése**
***
* **URL**

  _/accounts_

* **Method:**

  `GET`

* **Success Response:**
    
    * **Code:** 200 <br />
      **Content:**
      ```json
        [
          {
              "type": "cash",
              "color": "#ffffff",
              "_id": "6050d5a8ea2e48109ca0dd92",
              "name": "jani",
              "balance": 10000,
              "owner": {
              "_id": "6050c937f4af872fd8bd69bb",
              "lastName": "teszt",
              "firstName": "elek",
              "email": "teszt@elek.com",
              "lastLogin": "2021-03-16T15:05:27.823Z",
              "__v": 0
          },
          "__v": 0
          }, ...
      ]
      ```

* **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
          "statusCode": 401,
          "message": "Unauthorized"
        }
      ```
* **Notes:**

  _If no account is associated with the user, an empty array will be returned._


**Fiók lekérdezése azonosítója alapján**
***
* **URL**

  _/accounts/:accountId_

* **URL parameters**
  
    `accountId`

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "type": "cash",
          "color": "#ffffff",
          "_id": "6050d5a8ea2e48109ca0dd92",
          "name": "jani",
          "balance": 10000,
          "owner": {
              "_id": "6050c937f4af872fd8bd69bb",
              "lastName": "teszt",
              "firstName": "elek",
              "email": "teszt@elek.com",
              "lastLogin": "2021-03-16T15:05:27.823Z",
              "__v": 0
          },
          "__v": 0
        }
      ```

* **Error Response:**
    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
          "statusCode": 401,
          "message": "Unauthorized"
        }
      ```

* **Notes:**

  _If no account was found with the given data, an empty array will be returned._


**Fiók létrehozása**
***
* **URL**

  _/accounts/create_

* **Method:**

  `POST`

* **Data Params**

  ```json
    {
        "name": "My Bank Account",
        "type": "bank",
        "balance": 10000,
        "color": "#ffffff",
        "owner": "6050c937f4af872fd8bd69bb"
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "_id": "6050d715ea2e48109ca0dd93",
          "type": "bank",
          "color": "#ffffff",
          "name": "My Bank Account",
          "balance": 10000,
          "owner": {
              "_id": "6050c937f4af872fd8bd69bb",
              "lastName": "teszt",
              "firstName": "elek",
              "email": "teszt@elek.com",
              "lastLogin": "2021-03-16T15:05:27.823Z",
              "__v": 0
          },
          "__v": 0
        }
      ```

* **Error Response:**
    * **Code:** 400 Bad Request <br />
      **Content:**
      ```json
        {
          "errors": [
            {
              "path": "errorPath",
              "message": "errorMessage"
            }
          ]
        }
      ```

  OR

    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
          "statusCode": 401,
          "message": "Unauthorized"
        }
      ```

**Fiók frissítése**
***
* **URL**

  _/accounts/:accountId_
  
* **URL parameters**

  `accountId`

* **Method:**

  `PUT`

* **Data Params**

  ```json
    {
        "name": "My Updated Account Name",
        "type": "bank",
        "color": "#000000"
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "_id": "6050d715ea2e48109ca0dd93",
          "type": "bank",
          "color": "#000000",
          "name": "My Updated Account Name",
          "balance": 10000,
          "owner": {
              "_id": "6050c937f4af872fd8bd69bb",
              "lastName": "teszt",
              "firstName": "elek",
              "email": "teszt@elek.com",
              "lastLogin": "2021-03-16T15:05:27.823Z",
              "__v": 0
          },
          "__v": 0
        }
      ```

* **Error Response:**
    * **Code:** 400 Bad Request <br />
      **Content:**
      ```json
        {
          "errors": [
            {
              "path": "errorPath",
              "message": "errorMessage"
            }
          ]
        }
      ```

  OR

    * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
          "statusCode": 401,
          "message": "Unauthorized"
        }
      ```

**Fiók törlése**
***
* **URL**

  _/accounts/:accountId_

* **URL parameters**

  `accountId`

* **Method:**

  `DELETE`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "_id": "6050d715ea2e48109ca0dd93",
          "type": "bank",
          "color": "#000000",
          "name": "My Updated Account Name",
          "balance": 10000,
          "owner": "6050c937f4af872fd8bd69bb",
          "__v": 0
        }
      ```

* **Error Response:**
  * **Code:** 401 UNAUTHORIZED <br />
      **Content:**
      ```json
        {
          "statusCode": 401,
          "message": "Unauthorized"
        }
      ```
    
* **Notes:**

  _If no account was found with the given data, an empty array will be returned._

    

## <a name="transactions"></a> Tranzakciók
## <a name="milestones"></a> Mérföldkövek
## <a name="sources"></a> Bevételi források
## <a name="categories"></a> Kategóriák
