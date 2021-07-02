const modelCategoria = require("./model/dbcategoria"); //traemos nuestra conexion a la db
const DB = require("./config/dbconfig");
//Requerido en todos
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const router = express.Router();

app.use(bodyParser.urlencoded({ extended: true })); //se usa para los post
app.use(bodyParser.json());
app.use(cors());
app.use("/api", router); // creacion de ruta para las peticiones de la api

// creacion de la funcion de la api
// router.route("/categoria/getAll").get((request, response) => {
//   return modelCategoria.getCategoria().then((data) => {
//     response.json(data);
//   });
// });

router.route("/categoria/getAll").get((req, response) => {
  modelCategoria.getCategoria().then((data) => {
    console.log(data, "AQUI");
  });
  DB.query("SELECT * FROM categoria WHERE cat_est = 1", (err, data) => {
    response.json(data);
  });
});

router.route("/categoria/:id").get((req, res) => {
  DB.query(
    `SELECT * FROM categoria WHERE cat_id = ${req.params.id} AND cat_est = 1`,
    (err, data) => {
      res.json(data);
    }
  );
});

router.route("/categoria/insert").post((req, res) => {
  DB.query(
    `INSERT INTO categoria (cat_nom, cat_obs, cat_est) VALUES ('${req.body.cat_nom}', '${req.body.cat_obs}', '1')`,
    (err, data) => {
      if (err) {
        throw console.log(err);
      }
      res.json(data);
    }
  );
});

router.route("/categoria/update/:id").put((req, res) => {
  DB.query(
    `UPDATE categoria SET cat_nom = '${req.body.cat_nom}', cat_obs = '${req.body.cat_obs}', cat_est = '${req.body.cat_est}' WHERE categoria.cat_id = ${req.params.id}`,
    (err, data) => {
      if (err) {
        throw console.log(err);
      }
      res.json(data);
    }
  );
});

router.route("/categoria/delete/:id").delete((req, res) => {
  DB.query(
    `UPDATE categoria SET cat_est = 0 WHERE cat_id = ${req.params.id} cat_est <> 0`,
    (err, data) => {
      if (err) {
        throw console.log(err);
      }
      res.json(data);
    }
  );
});

//creacion del puerto para ponerlo en escucha
const port = process.env.PORT || 8090;
app.listen(port);
console.log("Categoria Api Iniciando en el puerto ", port);
