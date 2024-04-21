const express = require('express');
const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/',usuarioController.cadastrarUsuario);
router.get('/',usuarioController.listarUsuarios);

module.exports = router;
