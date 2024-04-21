const usuarioService = require('../services/usuarioService');

const cadastrarUsuario = async (req, res) => {
  try {
    const novoUsuario = await usuarioService.criarUsuario(req.body);
    res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso', usuario: novoUsuario });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao cadastrar usuário', error: error.message });
  }
};

const buscarUsuarioPorEmailESenha = async (req, res) => {
  try {
    const { email, senha } = req.body; // Recupera email e senha do corpo da requisição

    // Verifica se o email e senha foram fornecidos
    if (!email || !senha) {
      return res.status(400).json({ mensagem: 'O email e a senha são obrigatórios' });
    }

    // Chama o serviço para buscar o usuário por email e senha
    const usuario = await usuarioService.buscarUsuarioPorEmailESenha(email, senha);

    // Se o usuário não foi encontrado, retorna um erro 404
    if (!usuario) {
      return res.status(404).json({ mensagem: 'Usuário não encontrado' });
    }

    // Se o usuário foi encontrado, retorna os dados do usuário
    console.log(usuario)
    res.status(200).json({ mensagem: 'Usuário encontrado', usuario });
  } catch (error) {
    // Se ocorrer um erro, retorna um erro 500
    res.status(500).json({ mensagem: 'Erro ao buscar usuário', error: error.message });
  }
};


module.exports = { cadastrarUsuario, buscarUsuarioPorEmailESenha };