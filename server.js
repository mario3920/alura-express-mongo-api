import http from "http"

const PORT = 3000

const rotas = {
  "/": "curso de Node JS",
  "/livros": "Rota Livros",
  "/autores": "Rota Autores"
}

const server = http.createServer((req, res) => {
  res.writeHead(200,{ "Content-type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(PORT, () => {
  console.log("servidor escutando!")
});