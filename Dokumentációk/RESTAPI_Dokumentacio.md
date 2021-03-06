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
**Tranzakciók lekérdezése**
***
* **URL**

  _/transactions/:accountId_

* **URL parameters**

    `:accountId`

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "_id": "605a128d22919c2364753d33",
          "isPeriodic": true,
          "account": {
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
          },
              "amount": 50000,
              "category": {
              "color": "#e6e6e6",
              "_id": "6050e0e3121a2e31f49e62f7",
              "owner": {
                  "_id": "6050c937f4af872fd8bd69bb",
                  "lastName": "teszt",
                  "firstName": "elek",
                  "email": "teszt@elek.com",
                  "lastLogin": "2021-03-16T15:05:27.823Z",
                  "__v": 0
          },
          "name": "Kategória",
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

  _If no category is associated with the account, an empty array will be returned._


**Tranzakció létrehozása**
***
* **URL**

  _/transactions/create_

* **Method:**

  `POST`

* **Data Params**

  ```json
    {
        "account": "6050d5a8ea2e48109ca0dd92",
        "amount": "50000",
        "category": "6050e0e3121a2e31f49e62f7",
        "isPeriodic": "true"
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "_id": "605a128d22919c2364753d33",
          "isPeriodic": true,
          "account": {
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
          },
          "amount": 50000,
          "category": {
              "color": "#e6e6e6",
              "_id": "6050e0e3121a2e31f49e62f7",
              "owner": {
                  "_id": "6050c937f4af872fd8bd69bb",
                  "lastName": "teszt",
                  "firstName": "elek",
                  "email": "teszt@elek.com",
                  "lastLogin": "2021-03-16T15:05:27.823Z",
                  "__v": 0
          },
          "name": "Kategória",
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

**Tranzakció frissítése**
***
* **URL**

  _/transactions/:transactionId_

* **URL parameters**

  `transactionId`

* **Method:**

  `PUT`

* **Data Params**

  ```json
        {
            "amount": "25000",
            "isPeriodic": true
        }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
            {
              "isPeriodic": true,
              "_id": "605a128d22919c2364753d33",
              "account": {
                  "type": "cash",
                  "color": "#ffffff",
                  "_id": "6050d5a8ea2e48109ca0dd92",
                  "name": "jani",
                  "balance": 60000,
                  "owner": {
                      "_id": "6050c937f4af872fd8bd69bb",
                      "lastName": "teszt",
                      "firstName": "elek",
                      "email": "teszt@elek.com",
                      "lastLogin": "2021-03-16T15:05:27.823Z",
                      "__v": 0
              },
              "__v": 0
              },
              "amount": 25000,
              "category": {
                  "color": "#e6e6e6",
                  "_id": "6050e0e3121a2e31f49e62f7",
                  "owner": {
                      "_id": "6050c937f4af872fd8bd69bb",
                      "lastName": "teszt",
                      "firstName": "elek",
                      "email": "teszt@elek.com",
                      "lastLogin": "2021-03-16T15:05:27.823Z",
                      "__v": 0
              },
              "name": "Kategória",
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

**Tranzakció törlése**
***
* **URL**

  _/transactions/:transactionId_

* **URL parameters**

  `transactionId`

* **Method:**

  `DELETE`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
            "isPeriodic": true,
            "_id": "605a14eef1206308b0b80b84",
            "account": "6050d5a8ea2e48109ca0dd92",
            "amount": 50000,
            "category": "6050e0e3121a2e31f49e62f7",
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

  _The balance of the transaction's account will be updated after the creation of a new transaction._
## <a name="milestones"></a> Mérföldkövek
## <a name="sources"></a> Bevételi források
## <a name="categories"></a> Kategóriák
**Kategóriák lekérdezése**
***
* **URL**

  _/categories_

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        [
            {
            "color": "#e6e6e6",
            "_id": "6050df6c121a2e31f49e62f6",
            "owner": {
                "_id": "6050c937f4af872fd8bd69bb",
                "lastName": "teszt",
                "firstName": "elek",
                "email": "teszt@elek.com",
                "lastLogin": "2021-03-16T15:05:27.823Z",
                "__v": 0
            },
            "name": "Kategória",
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

  _If no category is associated with the user, an empty array will be returned._


**Kategória lekérdezése azonosítója alapján**
***
* **URL**

  _/categories/:categoryId_

* **URL parameters**

  `categoryId`

* **Method:**

  `GET`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
            "color": "#e6e6e6",
            "_id": "6050df6c121a2e31f49e62f6",
            "owner": {
                "_id": "6050c937f4af872fd8bd69bb",
                "lastName": "teszt",
                "firstName": "elek",
                "email": "teszt@elek.com",
                "lastLogin": "2021-03-16T15:05:27.823Z",
                "__v": 0
            },
            "name": "Kategória",
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

  _If no category was found with the given data, an empty array will be returned._


**Kategória létrehozása**
***
* **URL**

  _/categories/create_

* **Method:**

  `POST`

* **Data Params**

  ```json
    {
      "owner": "6050c937f4af872fd8bd69bb",
      "name": "Kategória",
      "color": "#e6e6e6"
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
            "_id": "6050df6c121a2e31f49e62f6",
            "color": "#e6e6e6",
            "owner": {
                "_id": "6050c937f4af872fd8bd69bb",
                "lastName": "teszt",
                "firstName": "elek",
                "email": "teszt@elek.com",
                "lastLogin": "2021-03-16T15:05:27.823Z",
                "__v": 0
            },
            "name": "Kategória",
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

**Kategória frissítése**
***
* **URL**

  _/categories/:categoryId_

* **URL parameters**

  `categoryId`

* **Method:**

  `PUT`

* **Data Params**

  ```json
    {
        "name": "My Updated Category Name",
        "color": "#aaaaaa"
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
            {
                "color": "#aaaaaa",
                "_id": "6050df6c121a2e31f49e62f6",
                "owner": {
                    "_id": "6050c937f4af872fd8bd69bb",
                    "lastName": "teszt",
                    "firstName": "elek",
                    "email": "teszt@elek.com",
                    "lastLogin": "2021-03-16T15:05:27.823Z",
                    "__v": 0
                },
                "name": "My Updated Category Name",
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

**Kategória törlése**
***
* **URL**

  _/categories/:categoryId_

* **URL parameters**

  `categoryId`

* **Method:**

  `DELETE`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
            {
                "color": "#e6e6e6",
                "_id": "6050df6c121a2e31f49e62f6",
                "owner": "6050c937f4af872fd8bd69bb",
                "name": "Kategória",
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

  _If no category was found with the given data, an empty array will be returned._

## <a name="milestones"></a> Mérföldkövek
**Mérföldkő létrehozása**
***
* **URL**

  _/milestones/create_

* **Method:**

  `POST`

* **Data Params**

  ```json
  {
    "owner": "6050c8697d036c0b9052262e",
    "name": "Mérföldkő címe",
    "goalPrice": "1000",
    "deadline": "2021-04-01T12:00:00"
  }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "_id": "60632bc1774f252c6ce8de94",
          "sources": [],
          "owner": {
              "_id": "6050c8697d036c0b9052262e",
              "lastName": "string",
              "firstName": "string",
              "email": "string@string.com",
              "lastLogin": "2021-03-16T15:02:01.198Z",
              "__v": 0
          },
          "name": "Teszt",
          "goalPrice": 1000,
          "deadline": "2021-04-01T10:00:00.000Z",
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

  OR

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

**Mérföldkő frissítése**
***
* **URL**

  _/milestones/:milestoneId_

* **Method:**

  `PUT`

* **Data Params**

  ```json
    {
        "name": "Updated cím",
        "goalPrice": "300"
    }
  ```

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "sources": [],
          "_id": "60632b90c8d07b131065d659",
          "owner": {
              "_id": "6050c8697d036c0b9052262e",
              "lastName": "string",
              "firstName": "string",
              "email": "string@string.com",
              "lastLogin": "2021-03-16T15:02:01.198Z",
              "__v": 0
          },
          "name": "Updated teszt",
          "goalPrice": 300,
          "deadline": "2021-04-01T10:00:00.000Z",
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

  OR

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

**Mérföldkő törlése**
***
* **URL**

  _/milestones/:milestoneId_

* **Method:**

  `DELETE`

* **Success Response:**

    * **Code:** 200 <br />
      **Content:**
      ```json
        {
          "sources": [],
          "_id": "60632bc1774f252c6ce8de94",
          "owner": "6050c8697d036c0b9052262e",
          "name": "Teszt",
          "goalPrice": 1000,
          "deadline": "2021-04-01T10:00:00.000Z",
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