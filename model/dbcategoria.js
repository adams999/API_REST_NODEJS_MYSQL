var configDB = require("../config/dbconfig"); //importamos la conexion a la db

async function getCategoria() {
  let datos = [];
  try {
    const categoria = configDB.query("SELECT * FROM categoria", (err, data) => {
      return data;
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getCategoria: getCategoria,
};
