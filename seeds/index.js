const sequelize = require('../config/connection');
const { Apartment, Complex, CycleType, DryerSettings, DryLevel, Employee, Machine, Management, Reservation, Role, User, WasherSettings, Status } = require('../models');
const casual = require('casual');
const complexData = require('./complexData.json');
const CycleTypeData = require('./cycleTypeData.json');
const dryLevelData = require('./dryLevelData.json');
const employeeData = require('./employeeData.json');
const machineData = require('./machineData.json');
const managementData = require('./managementData.json');
const roleData = require('./roleData.json');
const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    const userArray =[];
    for (let i = 0; i < 3; i++) {
        let user = {
            "firstname": casual.first_name,
            "lastname": casual.last_name,
            "phone_number": casual.phone,
            "email": casual.email,
            "password": casual.password
        }
        userArray.push(user[i]);
    }
    const users = await User.bulkcreate(userArray, {
        individualHooks: true,
        return: true,
    });
    process.exit(0);
};
seedDatabase();