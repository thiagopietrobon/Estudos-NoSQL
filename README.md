# Estudos NoSQL — Catálogo de Produtos de uma Padaria

## 1. Sobre o projeto

Este projeto foi desenvolvido para a disciplina de Banco de Dados Avançado com o objetivo de estudar o uso de bancos de dados NoSQL orientados a documentos.

O sistema representa o catálogo de uma padaria, armazenando informações sobre produtos, categorias, preços, formas de venda, estoque e disponibilidade.

O banco utilizado é o **Cloud Firestore**, serviço de banco de dados NoSQL do Firebase.

## 2. Tecnologias utilizadas

- Node.js
- JavaScript
- Firebase Admin SDK
- Cloud Firestore

## 3. Por que escolhemos o Cloud Firestore?

Escolhemos o Cloud Firestore por ser um banco NoSQL orientado a documentos, com integração simples com JavaScript, hospedagem na nuvem e suporte a documentos com campos de diferentes tipos, incluindo arrays. Isso facilita o armazenamento e a consulta das informações dos produtos da padaria sem precisar manter um servidor de banco de dados próprio.

## 4. Requisitos para executar o projeto

Antes de começar, é necessário ter:

- Node.js e npm instalados.
- Acesso à internet.
- Um projeto criado no Firebase Console.
- O Cloud Firestore habilitado nesse projeto.
- Uma chave de conta de serviço para autenticação do Firebase Admin SDK.

## 5. Configuração do ambiente

### 5.1. Obter o projeto Firebase

1. Acesse https://console.firebase.google.com/.
2. Crie um projeto ou utilize um projeto Firebase existente.
3. Abra a opção **Firestore Database**.
4. Crie o banco de dados seguindo as instruções do console.
5. Acesse as configurações do projeto e gere uma chave privada para uma conta de serviço com as permissões necessárias.

### 5.2. Configurar as credenciais

Coloque o arquivo JSON da chave de serviço na pasta principal do projeto e renomeie-o para:

`serviceAccountKey.json`

**Importante:** esse arquivo contém credenciais privadas. Não o envie para o GitHub nem compartilhe seu conteúdo.

O arquivo `.gitignore` deve conter:

```gitignore
serviceAccountKey.json
node_modules/
```

### 5.3. Instalar as dependências

Abra o terminal na pasta do projeto e execute:

```bash
npm install
```

Esse comando instala as dependências definidas no `package.json`.

## 6. Estrutura do projeto

```text
Estudos-NoSQL/
├── src/
│   └── firebase.js
├── scripts/
│   ├── carga.js
│   └── testar_conexao.js
├── consultas/
│   ├── categoria_pao.js
│   ├── disponivel.js
│   ├── estoqueMenorQue.js
│   ├── por_peso.js
│   └── precoMenorCinco.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

O arquivo `serviceAccountKey.json` também deve existir localmente, mas não deve ser versionado no repositório.

## 7. Executar o projeto

### 7.1. Testar a conexão

Na pasta principal, execute:

```bash
node scripts/testar_conexao.js
```

O script verifica se a aplicação consegue acessar a coleção `produtos` no Firestore.

### 7.2. Cadastrar os produtos

Execute:

```bash
node scripts/carga.js
```

O script cadastra 30 produtos na coleção `produtos`. Os documentos usam identificadores definidos no código; por isso, executar novamente a carga atualiza os documentos correspondentes em vez de criar novos IDs aleatórios.

### 7.3. Executar as consultas

Execute cada consulta separadamente:

```bash
node consultas/consulta1.js
node consultas/consulta2.js
node consultas/consulta3.js
node consultas/consulta4.js
node consultas/consulta5.js
```

As consultas demonstram filtros por categoria, forma de venda, preço, estoque e disponibilidade.

## 8. Modelo dos documentos

Os produtos são armazenados na coleção `produtos`.

Os campos variam conforme a forma de venda. Produtos vendidos por unidade utilizam campos como `preco` e `quantidadeEstoque`. Produtos vendidos por peso utilizam `precoPorKg` e `estoqueGramas`.

Alguns documentos também contêm o campo `ingredientes`, representado como um array de textos. Esse recurso demonstra que documentos do Firestore podem armazenar listas diretamente em seus campos.

## 9. Segurança

A chave privada da conta de serviço não deve ser enviada ao GitHub. O arquivo `serviceAccountKey.json` deve permanecer no `.gitignore`.

Em um ambiente compartilhado ou de produção, prefira métodos de autenticação gerenciados e conceda somente as permissões necessárias.

