import db from "../config/dbConnect";
import { DataTypes } from "sequelize";

const usersModel = db.define('users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true
      },
      email: {
        type: DataTypes.STRING(255) ,
        allowNull: false,
        unique: true
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false
      }

    }, {
      tableName: 'users',
      timestamps: false
    });


export default usersModel;
