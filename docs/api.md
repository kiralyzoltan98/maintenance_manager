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
- returns all device categories
**response**
`
[
  {
    DeviceCategoryId,
    DeviceCategoryName,
    Description,
    Intervall,
    Time,
    QualificationId
  },
  ...
`

## /task-by-id
- get task by userId
**URL params**
- userId : number

**response**
`
[
  {
    MaintenanceId,
    UserId,
    QualificationId,
    Date
  },
  ...
`

## /categories

**response**
`
[
  {
    MainCategoryId,
    SubCategoryId
  },
  ...
`

## /tasks

**response**
`
[
  {
    "MaintenanceId": 1,
    "UserId": 1,
    "QualificationId": 1,
    "Date": "2022-04-06T00:00:00.000Z"
  }
  ...
]`

## /maintenances

**response**
`
[
  {
    MaintenanceId,
    Type,
    Deadline,
    Priority,
    Status,
    IgnoreMessage,
    DeviceId
  }
  ...
]`




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
 - { 
   UserId,
   UserName,
   Password,
   QualificationId,
   Type
  }
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

  ## /qualification-to-user
 **params**
  - qualificationId, userId

**response**
 - {  "affectedRows": x, "lastInsertId": y }
 - Qualification does not exist!
 - User does not exist!
 - Invalid request!

  ## /qualification-to-user
 **params**
  - qualificationId, userId

**response**
 - {  "affectedRows": x, "lastInsertId": y }
 - Qualification does not exist!
 - User does not exist!
 - Invalid request!

  ## /task
 **params**
  - maintenanceId, userId, qualificationId, date

**response**
 - {  "affectedRows": x, "lastInsertId": y }
 - UserId does not exists!
 - QualificationId does not exists!
 - Invalid request!


