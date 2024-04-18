import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js";

class LivroController {

  static async listarLivros(req, res) {
    try{
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros);
    }catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar os livros`})
    }
  }

  static async buscaLivroPorId(req, res) {
    try{
      const livroById = await livro.findById(req.params.id)
      res.status(200).json(livroById);
    }catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar o livro`})
    }
  }

  static async cadastrarLivro(req, res) {
    const novoLivro = req.body;
    try {
      const autorEncontrado = await autor.findById(novoLivro.autor)
      const livroCompleto = { ...novoLivro, autor: {...autorEncontrado._doc }}
      const livroCriado = await livro.create(livroCompleto)
      res.status(201).json({ message: "Criado com sucesso", livro: novoLivro})
    }catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao cadastrar o livro`})
    }
  }

  static async alteraLivro(req, res) {
    try {
      const putLivro = await livro.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({message: "Livro alterado com sucesso!"})
    }catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao alterar o livro`})
    }
  }

  static async deletaLivro(req, res){
    try {
      const deleteLivro = await livro.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"Livro removido!"})
    }catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar o livro`})
    }
  }

  static async listarLivrosPorEditora(req, res) {
    const editora = req.query.editora;
    try{
      const livrosPorEditora = await livro.find({editora: editora})
      res.status(200).json(livrosPorEditora)
    } catch(erro) {
      res.status(500).json({message: `${erro.message} - falha na busca`})
    }
  }
}

export default LivroController