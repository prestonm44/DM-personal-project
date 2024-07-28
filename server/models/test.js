//See if associations within sequelize are working
//Test here
//Does the .create method work?

import db from "../config/db.js";
import { AccessType, Building, User, AccessPoint } from "./model.js";

await db.sync({
    force: true
})

const firstBuilding = Building.create({
    name: 'myFirstBuilding',
    address: '1234 first bldg st'
})


const firstUser = User.create({
    name: 'Henry Jones', 
    position: 'CMO',
    email: 'preston@test.com',
    password: 'helloworld'
})



const firstAccessPoint = AccessPoint.create({
    name: 'Front Door'
})

const firstAccessType = AccessType.create({
    name: 'Managerial'
})



