//import all models. 
const Apartment = require('./Apartment');
const Complex = require('./Complex');
const CycleType = require('./CycleType');
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


//Employee - Complex (management_id)
  //Employees BelongToMany Complexes
  Employee.belongsToMany(Complex, {
    foreignKey: 'management_id'
  });

  //Complex hasMany Employees
  Complex.hasOne(Employee, {
    foreignKey: 'management_id',
    onDelete: 'CASCADE'
  });

//Employee - Complex (maintenance)
  //Employees BelongToMany Complexes
Employee.belongsToMany(Complex, {
  foreignKey: 'maintenance_id'
});
  //Complex hasMany Employees
Complex.hasOne(Employee, {
  foreignKey: 'maintenance_id',
  onDelete:'CASCADE'
})

//Complex - Machine
  //Complex hasMany Machines
  Complex.hasMany(Machine, {
    foreignKey: 'maintenance_id'
  });
  //Machine belongTo Complex
  Machine.belongsTo(Complex, {
    foreignKey: 'complex_id'
  })

//Complex - Apartment
  //Complex hasMany Apartment
  Complex.hasMany(Apartment, {
    foreignKey:'complex_id',
    onDelete: 'CASCADE'
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

//Machine - Reservation
  //Machine BelongsToMany Reservations 
  Machine.belongsToMany(Reservation, {
    foreignKey: 'machine_id',
    onDelete: 'CASCADE'
  })
  //Reservation hasOne Machine 
  Reservation.hasOne(Machine, {
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
  Machine.hasOne(Status, {
    foreignKey: 'status_id'
  });

  Status.belongsToMany(Machine, {
    foreignKey:'status_id'
  })
