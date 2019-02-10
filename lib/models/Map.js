import Sequelize      from 'sequelize';
import sequelize      from '../sequelize.js';

export default class Map extends Sequelize.Model {}

Map.init({
    id        : { type: Sequelize.UUID, defaultValue: Sequelize.UUIDV4, primaryKey: true },
    left      : { type: Sequelize.FLOAT, allowNull: false },
    right     : { type: Sequelize.FLOAT, allowNull: false },
    top       : { type: Sequelize.FLOAT, allowNull: false },
    bottom    : { type: Sequelize.FLOAT, allowNull: false },
    progress  : { type: Sequelize.INTEGER, allowNull: false, defaultValue: 0 },
    zoom      : { type: Sequelize.INTEGER, allowNull: false },
    status    : { type: Sequelize.ENUM('PENDING', 'RUNNING', 'COMPLETED'), defaultValue: 'PENDING', allowNull: false },
    createdAt : { type: Sequelize.DATE, allowNull: false },
    updatedAt : { type: Sequelize.DATE, allowNull: false }
}, { sequelize });
