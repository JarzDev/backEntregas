const { Sequelize } = require('sequelize');

const dbConnect = new Sequelize('calc_entregas',  'root', 'password',{//   'Angular', 'F*d@.?AoYud%',
  
    host: 'localhost',
    dialect: 'mysql',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });

export default dbConnect;