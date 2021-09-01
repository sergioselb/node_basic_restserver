const { validationResult } = require("express-validator");

const validarCampos = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // errores esta vacio ? = no hay errores pero si lo negamos seria: si hay errores ...
    return res.status(400).json(errors);
  }

  next();
};

module.exports = {
  validarCampos,
};
