import { DataTypes, Model } from 'sequelize';
import { Building, User } from './userNBuilding.js';
import util from 'util';
import db from '../config/db.js';


export class AccessPoint extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

AccessPoint.init(
    {
        accessId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        },
        buildingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        accessTypeId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
    }, 
    {
        modelName: 'accessPoint',
        sequelize: db,
    },
);



export class AccessType extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

AccessType.init(
    {
        accessTypeId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
        }
    }, 
    {
        modelName: 'accessType',
        sequelize: db,
    },
);


AccessType.hasMany(AccessPoint, { foreignKey: 'accessTypeId' });
AccessPoint.belongsTo(AccessType, { foreignKey: 'accessTypeId'});

AccessType.hasMany(User, { foreignKey: 'accessTypeId' });
User.belongsTo(AccessType, { foreignKey: 'accessTypeId' });

AccessPoint.hasMany(Building, { foreignKey: 'buildingId' });
Building.belongsTo(AccessPoint, { foreignKey: 'buildingId' });

