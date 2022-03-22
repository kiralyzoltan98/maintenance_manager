# GET 

## /users
- returns all users
**response**
`
[
  {
    "UserId": 1,
    "UserName": "Berci",
    "Password": "P@ss",
    "QualificationId": 1,
    "Type": "Admin"
  },
  ...
`


# POST

## /user
**params**
- userName, password, qualificationId, type

**response**
 - OK
 - Invalid request!

## /device
**params**
 - categoryId, deviceName, location

**response**
 - OK
 - Invalid request!

 ## /login
 **params**
  - userName, password

**response**
 - { user }
 - Invalid username or password!