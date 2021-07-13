//Requerido en todos
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routing/routes");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); //se usa para los post
app.use(bodyParser.json());
app.use(cors());
app.use("/api", routes);
app.use(routes);

//creacion del puerto para ponerlo en escucha
const port = process.env.PORT || 8090;
app.listen(port);
console.log("Api Iniciando en el puerto ", port);
