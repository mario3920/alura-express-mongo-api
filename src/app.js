import express from "express"
import conectaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const conexao = await conectaDatabase()

conexao.on("error", (erro) =>{
  console.error("erro de conexão:", erro)
})

conexao.once("open", () =>{
  console.log("Conexão com o banco feita com sucesso!");
})

const app = express();
app.use(express.json())

app.get("/",( req, res ) => {
  res.status(200).send("curso node JS");
})

app.get("/livros", async ( req, res ) => {
  
})

app.get("/livros/:id", async (req, res) => {
  const livroById = await livro.findOne({_id: req.params.id})
  res.status(200).json(livroById);
})

app.post("/livros", async (req, res) => {
  const insertLivro = await livro.insertMany(req.body)
  res.status(201).send("Livro cadastrado com sucesso!")
})

app.put("/livros/:id", async (req, res) => {
  const putLivro = await livro.updateOne({_id: req.params.id, ...req.body})
  res.status(200).json("Livro alterado com sucesso!")
})

app.delete("/livros/:id", async (req, res) => {
  const deleteLivro = await livro.deleteOne({_id: req.params.id})
  res.status(200).send("Livro removido!")
})

export default app