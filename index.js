const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware para processar dados do formulário
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Servir arquivos estáticos (HTML, CSS, JS)
app.use(express.static(path.join(__dirname)));


let produtos = [];

// Rota para obter todos os produtos
app.get('/api/produtos', (req, res) => {
    res.json(produtos);
});

// Rota para adicionar um produto
app.post('/api/produtos', (req, res) => {
    const { id, nome, quantidade, categoria } = req.body;

    if (!id || !nome || !quantidade || !categoria) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const produtoExistente = produtos.find(p => p.id === id);
    if (produtoExistente) {
        return res.status(400).json({ error: 'Já existe um produto com este ID.' });
    }

    const produto = { id, nome, quantidade, categoria };
    produtos.push(produto);
    res.status(201).json(produto);
});

// Rota para atualizar um produto
app.put('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { nome, quantidade, categoria } = req.body;

    const produto = produtos.find(p => p.id === id);
    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    produto.nome = nome;
    produto.quantidade = quantidade;
    produto.categoria = categoria;
    res.json(produto);
});

// Rota para obter um produto pelo ID
app.get('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const produto = produtos.find(p => p.id === id);

    if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    res.json(produto);
});

// Rota para remover um produto
app.delete('/api/produtos/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);

    const indexProduto = produtos.findIndex(p => p.id === id);
    if (indexProduto === -1) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
    }

    produtos.splice(indexProduto, 1);
    res.status(204).send();
});


app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});