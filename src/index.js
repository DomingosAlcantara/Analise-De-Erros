const customExpress = require("./config/customExpress");
const conexao = require("./infraestrutura/conexao");

const port = 3001;

//const app = customExpress();

conexao.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Conectado com Sucesso.");

    const app = customExpress();

    app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));
  }
});
