const express = require("express");
const router = express.Router();
const DB = require("../config/dbconfig");
const categoriaDB = require("../model/dbcategoria");
const objCategoria = new categoriaDB();

router.route("/categoria/getAll").get((req, res) => {
  objCategoria.getCategoriasAll().then((data) => {
    res.json(data);
  });
});

router.route("/categoria/:id").get((req, res) => {
  objCategoria.getCategoriaXId(req).then((data) => {
    res.json(data);
  });
});

router.route("/categoria/insert").post((req, res) => {
  objCategoria.postCategoriaInsert(req).then((data) => {
    res.json(data);
  });
});

router.route("/categoria/update/:id").put((req, res) => {
  objCategoria.putCategoriaUpdate(req).then((data) => {
    res.json(data);
  });
});

router.route("/categoria/delete/:id").delete((req, res) => {
  objCategoria.deleteCategoriaDelete(req).then((data) => {
    console.log(data);
    res.json(data);
  });
});

module.exports = router;
