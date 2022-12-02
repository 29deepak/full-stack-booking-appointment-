const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete2', 'root', 'Kunal@1234de', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
