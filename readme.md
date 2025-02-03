🛒 Lista de Compras - Gerenciador de Produtos

📌 Sobre o Projeto

O Lista de Compras é uma aplicação simples que permite cadastrar, visualizar, atualizar e excluir produtos de uma lista. Ele é desenvolvido utilizando Node.js e Express.js no backend, enquanto o frontend é baseado em HTML, CSS e JavaScript puro.

Este projeto tem como objetivo demonstrar um CRUD básico (Create, Read, Update, Delete) e sua integração entre frontend e backend.


🚀 Tecnologias Utilizadas
🖥 Backend - API REST com Node.js e Express

    Node.js → Ambiente de execução JavaScript no servidor.
    Express.js → Framework para criação de rotas e manipulação de requisições.
    Body-parser → Middleware para processar JSON enviado no corpo das requisições.

🎨 Frontend - Interface do Usuário

    HTML5 → Estrutura da página.
    CSS3 → Estilização do layout.
    JavaScript (Vanilla JS) → Manipulação do DOM e chamadas à API.

📦 Gerenciamento de Dependências

    NPM (Node Package Manager) → Para instalação e gerenciamento de pacotes.
    Nodemon → Para recarregar automaticamente o servidor durante o desenvolvimento.

🔧 Instalação e Execução

Clone este repositório

git clone https://github.com/AlexandreDChaves/listaCompras.git
cd listaCompras

Instale as dependências

npm install

Inicie o servidor

npm start
O servidor rodará em http://localhost:3000

Rotas da API
🛒 Lista de Compras - Gerenciador de Produtos
📌 Sobre o Projeto

O Lista de Compras é uma aplicação simples que permite cadastrar, visualizar, atualizar e excluir produtos de uma lista. Ele é desenvolvido utilizando Node.js e Express.js no backend, enquanto o frontend é baseado em HTML, CSS e JavaScript puro.

Este projeto tem como objetivo demonstrar um CRUD básico (Create, Read, Update, Delete) e sua integração entre frontend e backend.
🚀 Tecnologias Utilizadas
🖥 Backend - API REST com Node.js e Express

    Node.js → Ambiente de execução JavaScript no servidor.
    Express.js → Framework para criação de rotas e manipulação de requisições.
    Body-parser → Middleware para processar JSON enviado no corpo das requisições.

🎨 Frontend - Interface do Usuário

    HTML5 → Estrutura da página.
    CSS3 → Estilização do layout.
    JavaScript (Vanilla JS) → Manipulação do DOM e chamadas à API.

📦 Gerenciamento de Dependências

    NPM (Node Package Manager) → Para instalação e gerenciamento de pacotes.
    Nodemon → Para recarregar automaticamente o servidor durante o desenvolvimento.

📂 Estrutura do Projeto

listaCompras/
│── node_modules/         # Dependências do projeto
│── public/               # Arquivos estáticos (HTML, CSS, JS)
│── app.js                # Lógica do frontend (manipulação da UI)
│── index.js              # Servidor Express (API backend)
│── package.json          # Configuração do Node.js e dependências
│── index.html            # Interface principal do usuário
│── style.css             # Estilização da interface

🔧 Instalação e Execução

1️⃣ Clone este repositório

git clone https://github.com/AlexandreDChaves/listaCompras.git
cd listaCompras

2️⃣ Instale as dependências

npm install

3️⃣ Inicie o servidor

npm start

🔹 O servidor rodará em http://localhost:3000

📡 Rotas da API

Método	 Rota	            Descrição
GET	    /api/produtos	    Retorna todos os produtos cadastrados
GET	    /api/produtos/:id	Retorna um produto específico pelo ID
POST	/api/produtos	    Adiciona um novo produto
PUT	    /api/produtos/:id	Atualiza um produto existente
DELETE	/api/produtos/:id	Remove um produto pelo ID

🎨 Interface do Usuário

📌 Funcionalidades

✔️ Adicionar produtos com ID, nome, quantidade e categoria.
✔️ Atualizar informações dos produtos cadastrados.
✔️ Buscar produtos pelo ID.
✔️ Remover produtos da lista.
✔️ Exibir a lista completa de produtos cadastrados.

A interface foi construída com HTML e CSS, e a lógica de interação com a API é feita com JavaScript puro 

📌 Componentes

    Formulário para cadastro e edição de produtos.
    Lista dinâmica para visualização dos produtos.
    Botões para CRUD (Adicionar, Editar, Buscar, Remover).

🔄 Fluxo de Funcionamento

1️⃣ O usuário interage com a interface (index.html).
2️⃣ O JavaScript (app.js) captura os dados do formulário e os envia via fetch API para o backend.
3️⃣ O servidor Express.js (index.js) recebe a requisição, processa os dados e responde.
4️⃣ O frontend atualiza dinamicamente a interface, exibindo os produtos cadastrados.

🔮 Possíveis Melhorias

✅ Persistência de Dados: Utilizar um banco de dados real, como MongoDB ou SQLite.
✅ Interface Melhorada: Criar uma UI mais moderna com React ou Vue.js.
✅ Autenticação: Implementar login e permissões para usuários.
✅ Validações Mais Robustas: Melhorar o tratamento de erros no backend e frontend.