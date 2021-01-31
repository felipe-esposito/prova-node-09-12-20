const Sequelize = require('sequelize');
const sequelize = new Sequelize('user', 'root', 'root1234', {dialect: 'mysql', host: 'localhost'});
 
module.exports = sequelize;