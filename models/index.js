//import all models. 
const Apartment = require('./Aparment');
const Complex = require('./Complex');
const CycleType = requite('./CycleType');
const DryerSettings = require('./DryerSettings');
const DryLevel = require('./DryLevel');
const Employee = require('./Employee');
const Machine = require('./Machine');
const Management = require('./Management');
const Reservation = require('./Reservation');
const Role = require('./Role');
const User = require('./User');
const WasherSettings = require('./WasherSettings');


//relationships

//Management - Employee
  //Management hasMany Employees 
  //Employee BelongsTo Management

//Role - Employee 
  //Role hasMany Employees
  //Employee belongsTo Role

//Employee - Complex
  //Employees BelongToMany Complexes
  //Complex hasMany Employees

//Complex - Machine
  //Complex hasMany Machines
  //Machine belongTo Complex

//Complex - Apartment
  //Complex hasMany Apartment
  //Apartment belongsTo Complex

//Apartment - User
  //Apartment hasMany Users
  //Tenant belongsTo Apartment

//User - Reservation 
  //User hasMany Reservations
  //reservation belongsTo User

//Machine - Reservation
  //Machine BelongsToMany Reservations 
  //Reservation hasOne Machine 

//Machine - Washer Settings
  //Machine hasMany Washer Settings
  //WasherSetting belongsToMany Machines

//Machine - Dryer Settings
  //Machine hasMany DryerSettings
  //DryerSettings belongsToMany Machines

//Washer Settings - Cycle Type
  //Washer Settings hasMany CycleType
  //Cycle Type belongs to Washer Settings

//Dryer Settings - Dry Level
  //Dryer Settings hasMany Dry Level
  //Dry Level belongs to Dryer Settings