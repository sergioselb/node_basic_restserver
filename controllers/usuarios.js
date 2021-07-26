const { response, request } = require("express");

const usuariosGet = (req = request, res = response) => {
  const { q, nombre = "No name", apikey, page = 1 } = req.query;

  res.json({
    // se puede simular algun status despues del res.status(403) o el q sea
    msj: "get API - controlador",
    q,
    nombre,
    apikey,
    page,
  });
};

const usuariosPost = (req, res = response) => {
  //const body = req.body;
  const { nombre, edad } = req.body;

  res.json({
    msj: "post API -controlador",
    //body,
    nombre,
    edad,
  });
};

const usuariosPut = (req, res = response) => {
  const { id } = req.params;

  res.json({
    msj: "put API -controlador",
    id,
  });
};

const usuariosDelete = (req, res = response) => {
  res.json({
    msj: "delete API -controlador",
  });
};

const usuariosPatch = (req, res = response) => {
  res.json({
    msj: "patch API -controlador",
  });
};

module.exports = {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
};
