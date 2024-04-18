import { autor } from "../models/Autor.js";

class AutorController {

  static async listarAutores(req, res) {
    try{
    const listaAutores = await autor.find({})
    res.status(200).json(listaAutores);
    }catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar os autors`})
    }
  }

  static async buscaAutorPorId(req, res) {
    try{
      const autorById = await autor.findById(req.params.id)
      res.status(200).json(autorById);
    }catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao buscar o autor`})
    }

  }

  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body)
      res.status(201).json({ message: "Criado com sucesso", autor: novoAutor})
    }catch (error) {
      res.status(500).json({message: `${error.message} - Falha ao cadastrar o autor`})
    }
  }

  static async alteraAutor(req, res) {
    try {
      const putAutor = await autor.findByIdAndUpdate(req.params.id, req.body)
      res.status(200).json({message: "Autor alterado com sucesso!"})
    }catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao alterar o autor`})
    }
  }

  static async deletaAutor(req, res){
    try {
      const deleteAutor = await autor.findByIdAndDelete(req.params.id)
      res.status(200).json({message:"Autor removido!"})
    }catch (error) {
      res.status(500).json({ message: `${error.message} - Falha ao deletar o autor`})
    }
  }

}

export default AutorController