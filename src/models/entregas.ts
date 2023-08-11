import db from "../config/dbConnect";
import { DataTypes } from "sequelize";
import usersModel from "./users";

const entregasModel = db.define('entregas', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      sku: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      km: {
        type: DataTypes.INTEGER, 
        allowNull: true
      },
      mes: {
        type: DataTypes.INTEGER,
        allowNull: true
      },

      fecha: {
        type: DataTypes.DATE,
        allowNull: true
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      }

    }, {
      tableName: 'entregas',
      timestamps: false
    });
    entregasModel.belongsTo(usersModel, {foreignKey: 'user_id'});

export default entregasModel;
