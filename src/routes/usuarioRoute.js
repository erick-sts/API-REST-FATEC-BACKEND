const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');

router.post('/',usuarioController.cadastrarUsuario);
router.get('/',usuarioController.listarUsuarios);

module.exports = router;
