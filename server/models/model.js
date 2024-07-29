import { DataTypes, Model } from 'sequelize';
import util from 'util';
import db from '../config/db.js';


//ACCESS TYPE MODEL

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


//BUILDING MODEL

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

//USER MODEL

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


//USER BUILDING MODEL

export class UserBuilding extends Model {
    [util.inspect.custom]() {
        return this.toJSON();
    }
}

UserBuilding.init(
    {
        userBuildingId: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        buildingId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            unique: false,
        },
    }, 
    {
        modelName: 'userBuilding',
        sequelize: db,
    },
);


//ACCESS POINT MODEL

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


AccessType.hasMany(AccessPoint, { foreignKey: 'accessTypeId' });
AccessPoint.belongsTo(AccessType, { foreignKey: 'accessTypeId'});

AccessType.hasMany(User, { foreignKey: 'accessTypeId' });
User.belongsTo(AccessType, { foreignKey: 'accessTypeId' });

Building.hasMany(AccessPoint, { foreignKey: 'buildingId' });
AccessPoint.belongsTo(Building, { foreignKey: 'buildingId' });

Building.hasMany(UserBuilding, { foreignKey: 'buildingId' });
UserBuilding.belongsTo(Building, { foreignKey: 'buildingId' });

User.hasMany(UserBuilding, { foreignKey: 'userId' });
UserBuilding.belongsTo(User, { foreignKey: 'userId' });