import db from "../config/dbConnect";
import { DataTypes } from "sequelize";
import usersModel from "./users";

const bonosModel = db.define('bonos', {
    bonos_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      bonos: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      mes: {
        type: DataTypes.INTEGER,
        allowNull: false
      },

      fecha: {
        type: DataTypes.DATE,
        allowNull: false
      },

      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'users',
          key: 'id'
        }
      }
 
    },
     {
      tableName: 'bonos',
      timestamps: false
    });
    bonosModel.belongsTo(usersModel, {foreignKey: 'user_id'});

export default bonosModel;
