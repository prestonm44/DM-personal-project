import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../config/db.js';

export class Building extends Model {
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


export class User extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}


User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        }, 
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        accessTypeId: {
            type: DataTypes.INTEGER, 
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



