const express = require('express');

// função do express para manipular as rotas
const rotas = express.Router();

// POST
// rota para acesar o método POST para veículo
rotas.post('/', (req, res) => {

// puxando dados do arquivo index.html
novoVeiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    anomodelo: req.body.anomodelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
}

  // indica que o dado foi criado com sucesso
  res.status(201).send({
    mensagem: 'Veículo cadastrado com sucesso.',
    veiculo: novoVeiculo
  });
});


// PUT
// rota para atualizar seu veículo
rotas.put('/', (req, res) => {

const atualizaVeiculo = {
}

  res.status(200).send({
    mensagem: 'dados do veiculos foi atualizado',
    veiculo: atualizaVeiculo
  });
});


// DELETE
// rota para excluir o veículo com seu id
rotas.delete('/:idveiculo', (req, res) => {

const idVeiculo = req.params.idveiculo;


  res.status(202).send({
    mensagem: `Veículo com o id de: ${idVeiculo} foi excluído com sucesso.`
  });
});

// exportar toda a configuração da rota
module.exports = rotas;