const mysql = require("mysql");

const configDB = mysql.createConnection({
  user: "root",
  password: "",
  host: "localhost",
  database: "api_rest_nodejs_mysql",
});

configDB.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("ConexionDB Ok");
  }
});

module.exports = configDB; //se exporta par apoderla usar en los demas archivos js
