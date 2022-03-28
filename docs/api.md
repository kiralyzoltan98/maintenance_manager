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

## /qualifications
- returns all qualifications
**response**
`
[
  {
    "QualificationId": 1,
    "Qualification": "qualificationNameTest",
    "QualificationDescription": "Test description..."
  },
  ...
`

## /device-categories
- returns all users
**response**
`
[
  {
    deviceCategory
  },
  ...
`

## /task
- get task by userId
**params**
- userId : number

**response**
`
[
  {
    task
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

  ## /qualification
 **params**
  - qualification, qualificationDescription

**response**
 - {  "affectedRows": x, "lastInsertId": y }
 - Invalid username or password!

   ## /devicecategory
 **params**
  - deviceCategoryName, description, intervall, normtime

**response**
 - {  "affectedRows": x, "lastInsertId": y }
 - Invalid username or password!

   ## /category
 **params**
  - mainCategoryId, subCategoryId

**response**
 - {  "affectedRows": x, "lastInsertId": y }
 - Main category does not exist!
 - Sub category does not exist!
 - Invalid username or password!
