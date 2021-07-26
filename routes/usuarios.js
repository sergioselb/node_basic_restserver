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

// put actualiza
router.post("/", usuariosPost);

// coloca nueva data
router.put("/:id", usuariosPut); // se le agrega como un argumento que tomara de la peticion

router.delete("/", usuariosDelete);

router.patch("/", usuariosPatch);

module.exports = router;
