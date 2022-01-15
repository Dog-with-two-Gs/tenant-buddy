//import all models. 
const Management = require('./Management');
const Role = require('./Role');

const Employee = require('./Employee');
const Machine = require('./Machine');
const Complex = require('./Complex');


const Apartment = require('./Apartment');
const CycleType = require('./CycleType');
const DryLevel = require('./DryLevel');

const User = require('./User');
const DryerSettings = require('./DryerSettings');
const WasherSettings = require('./WasherSettings');
const Status = require('./Status')
const Reservation = require('./Reservation');
//relationships

//relationships

//Management - Employee
  //Management hasMany Employees 
  Management.hasMany(Employee, {
    foreignKey: 'management_id',
    onDelete: 'CASCADE'
  });

  //Employee BelongsTo Management
  Employee.belongsTo(Management, {
    foreignKey: 'management_id'
  });

//Role- Employee 
  //Role hasMany Employees
  Role.hasMany(Employee, {
    foreignKey: 'role_id',
    onDelete: 'CASCADE'
  });

  //Employee belongsTo Role
  Employee.belongsTo(Role, {
    foreignKey: 'role_id'
  })


//Employee - Complex
  //Employees BelongToMany Complexes
Employee.hasMany(Complex, {
  foreignKey: 'employee_id'
});
  //Complex hasMany Employees
  
  Complex.belongsTo(Employee, {
    foreignKey: 'employee_id',
    // onDelete:'CASCADE'
    constraints:false
  })

//Complex - Machine
  //Complex hasMany Machines
  Complex.hasMany(Machine, {
    foreignKey: 'complex_id'
  });
  //Machine belongTo Complex
  Machine.belongsTo(Complex, {
    foreignKey: 'complex_id'
  })

//Complex - Apartment
  //Complex hasMany Apartment
  Complex.hasMany(Apartment, {
    foreignKey:'complex_id',
    // onDelete: 'CASCADE'
  })
  //Apartment belongsTo Complex
  Apartment.belongsTo(Complex, {
    foreignKey: 'complex_id'
  })

//Apartment - User 
  //Apartment hasMany Users
  Apartment.hasMany(User, {
    foreignKey:'apartment_id',
    onDelete: 'CASCADE'
  });
  //UserbelongsTo Apartment
  User.belongsTo(Apartment, {
    foreignKey: 'apartment_id'
  });

//User - Reservation 
  //User hasMany Reservations
  User.hasMany(Reservation, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });

  //reservation belongsTo User
  Reservation.belongsTo(User, {
    foreignKey: 'user_id'
  });

Machine - Reservation
  //Machine BelongsToMany Reservations 
  Machine.hasMany(Reservation, {
    foreignKey: 'machine_id',
    onDelete: 'CASCADE'
  })
  //Reservation hasOne Machine 
  Reservation.belongsTo(Machine, {
    foreignKey: 'machine_id'
  })

//Washer Settings - Cycle Type
  //Washer Settings hasMany CycleType
  Machine.belongsToMany(CycleType, {
    through: WasherSettings
  })

  //Cycle Type belongs to Many Washer Settings
  CycleType.belongsToMany(Machine, {
    through: WasherSettings
  });

//Dryer Settings - Dry Level
  //Dryer Settings hasMany Dry Level
  Machine.belongsToMany(DryLevel, {
    through: DryerSettings
  });

  //Dry Level belongs to Dryer Settings
  DryLevel.belongsToMany(Machine, {
    through: DryerSettings
  });


  //Machine-Status
  Machine.belongsTo(Status, {
    foreignKey: 'status_id'
  });

  Status.hasMany(Machine, {
    foreignKey: 'status_id'
  });

  module.exports={ Apartment, Complex, CycleType, DryerSettings, DryLevel, Employee, Machine, Management, Reservation, Role, User, WasherSettings, Status }