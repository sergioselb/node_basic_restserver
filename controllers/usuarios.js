const { response, request } = require("express");
const bcryptjs = require("bcryptjs");

const Usuario = require("../models/usuario");

const usuariosGet = async (req = request, res = response) => {
  const { limite = 5, desde = 0 } = req.query;
  const query = { estado: true };

  const [total, usuarios] = await Promise.all([
    Usuario.countDocuments(query),
    Usuario.find(query).skip(Number(desde)).limit(Number(limite)),
  ]);

  res.json({
    total,
    usuarios,
  });
};

const usuariosPost = async (req, res = response) => {
  const { nombre, correo, password, rol } = req.body;
  const usuario = new Usuario({ nombre, correo, password, rol });

  /*   // Verificar si el correo existe // se movio al helper
  const existeEmail = await Usuario.findOne({ correo });
  if (existeEmail) {
    return res.status(400).json({
      msg: "Ese correo ya esta registrado!!!",
    });
  } */

  // Encriptar la contraseña
  const salt = bcryptjs.genSaltSync(); // numeros de vueltas para encriptar (1-100) estandar 10
  usuario.password = bcryptjs.hashSync(password, salt); // el hashSync encripta en una sola via (mas seguro)

  // Guardar en DB

  await usuario.save();
  //const { nombre, edad } = req.body;

  res.json({
    //msj: "post API -controlador",
    usuario,
    //body,
    //nombre,
    //edad,
  });
};

const usuariosPut = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, google, correo, ...resto } = req.body;

  // TODO validar contra BD
  if (password) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    resto.password = bcryptjs.hashSync(password, salt);
  }

  const usuario = await Usuario.findByIdAndUpdate(id, resto);

  res.json({
    msj: "put API -controlador",
    usuario,
    //id,
  });
};

const usuariosDelete = async(req, res = response) => {

  const {id} = req.params;

  // Borrar Fisicamente de la BD
  const usuario = await Usuario.findByIdAndDelete( id );

  // Borrado solo para el usuario (sigue apareciendo en la BD pero no se muestra en la UI)
  //const usuario = await Usuario.findByIdAndUpdate( id, {estado: false} );

  res.json({
    //msj: "delete API -controlador",
    //id
    usuario
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
