const Usuario = require('../model/usuarioModel');

const criarUsuario = async (dadosUsuario) => {
  try {
    const usuario = await Usuario.create(dadosUsuario);
    return usuario;
  } catch (error) {
    throw new Error('Erro ao criar usuário');
  }
};

const buscarUsuarioPorEmailESenha = async (email, senha) => {
  try {
    console.log('Email:', email);
    console.log('Senha:', senha);
    // Use o método findOne para encontrar um usuário com o email e senha fornecidos
    const usuario = await Usuario.findOne({ email, senha });
    
    console.log(usuario);
    // Verifica se um usuário foi encontrado
    if (usuario) {
      return true; // Retorna true se um usuário for encontrado
    } else {
      return false; // Retorna false se nenhum usuário for encontrado
    }
  } catch (error) {
    // Se ocorrer um erro durante a busca, lance uma exceção
    throw new Error('Erro ao buscar usuário por email e senha');
  }
}

module.exports = { criarUsuario, buscarUsuarioPorEmailESenha };
