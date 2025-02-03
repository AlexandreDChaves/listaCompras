const API_URL = 'http://localhost:3000/api/produtos';

async function adicionarProduto() {
    const idProduto = parseInt(document.getElementById('idProduto').value, 10);
    const nomeProduto = document.getElementById('nomeProduto').value;
    const quantidade = document.getElementById('quantidadeProduto').value;
    const categoria = document.getElementById('categoriaProduto').value;

    if (isNaN(idProduto) || !nomeProduto || !quantidade || !categoria) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: idProduto, nome: nomeProduto, quantidade, categoria }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }

        const produto = await response.json();
        alert(`Produto adicionado: ${produto.nome}`);
        exibirProdutos();
        limparCampos();
    } catch (error) {
        alert(error.message);
    }
}

async function atualizarProduto() {
    const idProduto = parseInt(document.getElementById('idProduto').value, 10);
    const nomeProduto = document.getElementById('nomeProduto').value;
    const quantidade = document.getElementById('quantidadeProduto').value;
    const categoria = document.getElementById('categoriaProduto').value;

    if (isNaN(idProduto) || !nomeProduto || !quantidade || !categoria) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${idProduto}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nome: nomeProduto, quantidade, categoria }),
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error);
        }

        const produto = await response.json();
        alert(`Produto atualizado: ${produto.nome}`);
        exibirProdutos();
        limparCampos();
    } catch (error) {
        alert(error.message);
    }
}

async function localizarProduto() {
    const idProduto = parseInt(document.getElementById('idProduto').value, 10);

    if (isNaN(idProduto)) {
        alert("O ID do produto deve ser um número válido.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${idProduto}`);
        if (!response.ok) {
            throw new Error('Produto não encontrado.');
        }

        const produto = await response.json();
        alert(`Produto localizado: ${produto.nome}, Quantidade: ${produto.quantidade}, Categoria: ${produto.categoria}`);
    } catch (error) {
        alert(error.message);
    }
}

async function removerProduto() {
    const idProduto = parseInt(document.getElementById('idProduto').value, 10);

    if (isNaN(idProduto)) {
        alert("O ID do produto deve ser um número válido.");
        return;
    }

    try {
        const response = await fetch(`${API_URL}/${idProduto}`, { method: 'DELETE' });
        if (!response.ok) {
            throw new Error('Produto não encontrado.');
        }

        alert('Produto removido com sucesso.');
        exibirProdutos();
        limparCampos();
    } catch (error) {
        alert(error.message);
    }
}

async function exibirProdutos() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Erro ao carregar produtos.');
        }

        const produtos = await response.json();
        const listaProdutos = document.getElementById('produtos-list');
        listaProdutos.innerHTML = '';

        produtos.forEach(produto => {
            const item = document.createElement('li');
            item.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Quantidade: ${produto.quantidade}, Categoria: ${produto.categoria}`;
            listaProdutos.appendChild(item);
        });
    } catch (error) {
        alert(error.message);
    }
}

function limparCampos() {
    document.getElementById('idProduto').value = '';
    document.getElementById('nomeProduto').value = '';
    document.getElementById('quantidadeProduto').value = '';
    document.getElementById('categoriaProduto').value = '';
}

// Carregar a lista de produtos ao iniciar
document.addEventListener('DOMContentLoaded', exibirProdutos);