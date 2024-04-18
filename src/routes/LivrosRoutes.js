import  express from "express";
import LivroController from "../controllers/LivroController.js";

const routers = express.Router()

routers.get("/livros", LivroController.listarLivros)

routers.get("/livros/busca", LivroController.listarLivrosPorEditora)

routers.get("/livros/:id", LivroController.buscaLivroPorId)

routers.post("/livros", LivroController.cadastrarLivro)

routers.put("/livros/:id", LivroController.alteraLivro)

routers.delete("/livros/:id", LivroController.deletaLivro)

export default routers