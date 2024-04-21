const express = require('express');
const router = express.Router();
const usuarioController = require('../controller/usuarioController');
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/',usuarioController.cadastrarUsuario);
router.get('/',usuarioController.listarUsuarios);

module.exports = router;
