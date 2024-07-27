//See if associations within sequelize are working
//Test here
//Does the .create method work?

import { Building, User } from "./userNProperty.js";

import db from "../config/db.js";
import { AccessPoint, AccessType } from "./accessPoint.js";

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



