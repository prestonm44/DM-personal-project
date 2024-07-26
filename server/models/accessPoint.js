import { DataTypes, Model } from 'sequelize';
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
        }
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
        modelName: 'accessPoint',
        sequelize: db,
    },
);


AccessType.hasMany(AccessPoint, { foreignKey: 'accessTypeId' });
AccessPoint.belongsTo(AccessType, { foreignKey: 'accessTypeId'});

