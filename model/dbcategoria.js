var configDB = require("../config/dbconfig"); //importamos la conexion a la db
const modelCategoria = require("../model/Categoria");

class CategoriaDB {
  getCategoriasAll() {
    const promesa = new Promise((resolve, reject) => {
      configDB.query(
        "SELECT * FROM categoria WHERE cat_est = 1",
        (err, data = new modelCategoria()) => {
          resolve(data);
          reject(err);
        }
      );
    });

    return promesa;
  }

  getCategoriaXId(req) {
    const promesa = new Promise((resolve, reject) => {
      configDB.query(
        `SELECT * FROM categoria WHERE cat_id = ${req.params.id} AND cat_est = 1`,
        (err, data = new modelCategoria()) => {
          resolve(data);
          reject(err);
        }
      );
    });

    return promesa;
  }

  postCategoriaInsert(req) {
    const promesa = new Promise((resolve, reject) => {
      configDB.query(
        `INSERT INTO categoria (cat_nom, cat_obs, cat_est) VALUES ('${req.body.cat_nom}', '${req.body.cat_obs}', '1')`,
        (err, data = new modelCategoria()) => {
          resolve(data);
          reject(err);
        }
      );
    });

    return promesa;
  }

  putCategoriaUpdate(req) {
    const promesa = new Promise((resolve, reject) => {
      configDB.query(
        `UPDATE categoria SET cat_nom = '${req.body.cat_nom}', cat_obs = '${req.body.cat_obs}', cat_est = '${req.body.cat_est}' WHERE categoria.cat_id = ${req.params.id}`,
        (err, data) => {
          resolve(data);
          reject(err);
        }
      );
    });

    return promesa;
  }

  deleteCategoriaDelete(req) {
    const promesa = new Promise((resolve, reject) => {
      configDB.query(
        `UPDATE categoria SET cat_est = 0 WHERE cat_id = ${req.params.id} AND cat_est <> 0`,
        (err, data) => {
          resolve(data);
          reject(err);
        }
      );
    });

    return promesa;
  }
}

// function getClassFunctions(callback) {
//   const promesa = new Promise((resolve, reject) => {
//     let objectThis = new categoriaDB();
//     if (result.length > 0) {
//     }
//   });

//   return promesa;
// }

module.exports = CategoriaDB;
