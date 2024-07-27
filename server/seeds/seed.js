

import { Building, User } from "../models/userNProperty.js";

import db from "../config/db.js";
import { AccessPoint, AccessType } from "../models/accessPoint.js";

await db.sync({
    force: true
})

console.log('Seeding database...')


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
    password: 'alison',
    accessTypeId: 2
})




