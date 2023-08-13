const Sequelize = require('sequelize');
const sequelize = new Sequelize("node", "root", "Kolhapur@64", {
  dialect: "mysql",
  host: "localhost",
  
});
module.exports=sequelize
