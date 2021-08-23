const { Router } = require("express");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/usuarios");

const router = Router();

router.get("/", usuariosGet);

// coloca nueva data
router.post("/", usuariosPost);

// put actualiza
router.put("/:id", usuariosPut); // se le agrega el id como un argumento que tomara de la peticion

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
