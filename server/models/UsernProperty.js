import { DataTypes, Model } from 'sequelize';
import util from 'util';
import connectToDB from './db.js';

const db = await connectToDB('postgresql:///security');

class Building extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

Building.init(
    {
        buildingId: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        },
    },
    {
        modelName: 'building', 
        sequelize: db,
    },
);


class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}


User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        Password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        }
    }, 
    {
        modelName: 'user',
        sequelize: db,
    },
);

User.hasMany(Building, { foreignKey: 'userId' });
Building.belongsTo(User, { foreignKey: 'userId'});



