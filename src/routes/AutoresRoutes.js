import  express from "express";
import AutorController from "../controllers/AutorController.js";

const routers = express.Router()

routers.get("/autores", AutorController.listarAutores)

routers.get("/autores/:id", AutorController.buscaAutorPorId)

routers.post("/autores", AutorController.cadastrarAutor)

routers.put("/autores/:id", AutorController.alteraAutor)

routers.delete("/autores/:id", AutorController.deletaAutor)

export default routers