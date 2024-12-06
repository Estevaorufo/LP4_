const express = require('express');
const fs = require('fs');

const bodyParser = require('body-parser');

// configuração de acesso ao servidor
const localhost = '127.0.0.1';
const port = 8080;

// criação do aplicativo servidor
const app = express();

// confguração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importar as configurações de src e routes
const veiculosRotas = require('./src/routes/Veiculos');

// rota raiz do servidor
// puxando o arquivo html
app.get('/', (req, res) => {

 const arquivoHtml = fs.readFileSync('./src/pages/index.html');

  res.status(200).end(arquivoHtml);

});

// configurar as rotas para veiculo
app.use('/veiculo', veiculosRotas);


// rodar o servidor
// executar o servidor
app.listen(port, localhost, console.log('O servidor está rodando...'));