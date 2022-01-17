const sequelize = require('../config/connection');
const { Apartment, Complex, CycleType, DryerSettings, DryLevel, Employee, Machine, Management, Reservation, Role, User, WasherSettings, Status } = require('../models');
const casual = require('casual');

const complexData = require('./complexData.json');
const cycleTypeData = require('./cycleTypeData.json');
const dryLevelData = require('./dryLevelData.json');
const employeeData = require('./employeeData.json');
const machineData = require('./machineData.json');
const managementData = require('./managementData.json');
const roleData = require('./roleData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });

    const cycleType = await CycleType.bulkCreate(cycleTypeData, {
        individualHooks: true,
        return: true,
    });

    const dryLevel = await DryLevel.bulkCreate(dryLevelData, {
        individualHooks: true,
        return: true,
    });
    

    // let userArray = [];

    // for (let i = 0; i < 3; i++) {
    //     let user = {
    //         "apartment_id": 1 + i,
    //         "firstname": casual.first_name,
    //         "lastname": casual.last_name,
    //         "phone_number": casual.phone,
    //         "email": casual.email,
    //         "password": `password${i}`
    //     };
    //     userArray.push(user);
    // }

    // console.log("User Array:")
    // console.log(userArray);

    // const users = await User.bulkCreate(userArray, {
    //     individualHooks: true,
    //     return: true,
    // });

    process.exit(0);
};

seedDatabase();