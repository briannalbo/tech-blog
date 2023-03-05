//uses dotenv to secure mysql info
require('dotenv').config();
//imports sequelize
const Sequelize = require('sequelize');
//pulls info from env file to set mysql connection
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

//exports connection to interact with database
module.exports = sequelize;




