
import db from "../config/db.js";
import { AccessType, Building, User, UserBuilding, AccessPoint } from "../models/model.js";

await db.sync({
    force: true
})

console.log('Seeding database...')



//ADDING FIELDS TO ACCESS TYPE TABLE

const basic = await AccessType.create({
    name: 'Basic'
})

const regular = await AccessType.create({
    name: 'Regular'
})

const advanced = await AccessType.create({
    name: 'Advanced'
})

const it = await AccessType.create({
    name: 'IT'
})


//ADDING FIELDS TO BUILDING TABLE

const lab = await Building.create({
    name: 'The Lab',
    address: '1248 W 700 S, Pleasant Grove, UT 84062'
})  

const production = await Building.create({
    name: 'Product Center',
    address: '549 S 1300 W St #100, Pleasant Grove, UT 84062'
}) 

const hq = await Building.create({
    name: 'Headquarters',
    address: '389 S 1300 W, Pleasant Grove, UT 84062'
})


//ADDING FIELDS TO ACCESS POINT TABLE

const labMain = await AccessPoint.create({
    name: 'Lab Main',
    buildingId: 1,
    accessTypeId: 1
})

const labConference = await AccessPoint.create({
    name: 'Lab Conference',
    buildingId: 1,
    accessTypeId: 2
})

const productionMain = await AccessPoint.create({
    name: 'Production Main',
    buildingId: 2,
    accessTypeId: 1
})

const productionInventory = await AccessPoint.create({
    name: 'Production Inventory',
    buildingId: 2,
    accessTypeId: 1
})

const hqMain = await AccessPoint.create({
    name: 'HQ Main',
    buildingId: 3,
    accessTypeId: 1
})

const servers = await AccessPoint.create({
    name: 'Server Room',
    buildingId: 3,
    accessTypeId: 4
})

const execSuite = await AccessPoint.create({
    name: 'Executive Suite',
    buildingId: 3,
    accessTypeId: 3
})


//ADDING TO USER TABLE

const johnny = await User.create({
    name: 'Johnny', 
    position: 'CMO',
    email: 'johnny@test.com',
    password: 'johnny',
    accessTypeId: 3
})

const alison = await User.create({
    name: 'Alison', 
    position: 'Product Manager',
    email: 'alison@test.com',
    password: 'alison',
    accessTypeId: 2
})

const hope = await User.create({
    name: 'Hope', 
    position: 'Social Media Manager',
    email: 'hope@gtest.com',
    password: 'hope',
    accessTypeId: 2
})




