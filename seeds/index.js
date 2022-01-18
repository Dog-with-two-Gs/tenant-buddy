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
const statusData = require('./StatusData.json');

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

    const management = await Management.bulkCreate(managementData, {
        individualHooks: true,
        return: true,
    });

    const role = await Role.bulkCreate(roleData, {
        individualHooks: true,
        return: true,
    });

    for (const employee of employeeData) {
        const currentEmployee = await Employee.create({
            ...employee,
            contact_number: casual.phone,
            management_id: management[Math.floor(Math.random() * management.length)].id,
        });
    };

    const complex = await Complex.bulkCreate(complexData, {
        individualHooks: true,
        return: true,
    });

    const status = await Status.bulkCreate(statusData, {
        individualHooks: true,
        return: true,
    });

    let apartmentArray = [];

    for (let i = 0; i < 30; i++) {
        let apartment = {
            "occupants": casual.integer(from = 1, to = 5),
            "complex_id": casual.integer(from = 1, to = 3),
            "apartment_no": casual.integer(from = 1, to = 20)
        }
        apartmentArray.push(apartment);
    };

    const apartments = await Apartment.bulkCreate(apartmentArray, {
        individualHooks: true,
        return: true,
    });

    for (let i = 0; i < 3; i++){
        for (const machine of machineData) {
            const currentMachine = await Machine.create({
                ...machine,
                complex_id: casual.integer(from = 1, to = 3)
            });
        };
    }
    

    let userArray = [];

    for (let i = 0; i < 3; i++) {
        let user = {
            "apartment_id": 1 + i,
            "firstname": casual.first_name,
            "lastname": casual.last_name,
            "phone_number": casual.phone,
            "email": casual.email,
            "password": `password${i}`
        };
        userArray.push(user);
    }

    const users = await User.bulkCreate(userArray, {
        individualHooks: true,
        return: true,
    });

    process.exit(0);
};

seedDatabase();