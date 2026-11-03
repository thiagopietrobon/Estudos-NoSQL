const db = require('../src/firebase');

const ID_TESTE = 'teste001';

async function inserirProduto() {
  try {
    const produto = {
      nome: 'Pão de alho',
      categoria: 'pao',
      formaVenda: 'unidade',
      preco: 4.50,
      quantidadeEstoque: 20,
      ingredientes: ['farinha de trigo', 'alho', 'manteiga', 'sal'],
      disponivel: true
    };

    await db.collection('produtos').doc(ID_TESTE).set(produto);

    console.log('Produto inserido com sucesso!');
  } catch (erro) {
    console.error('Erro ao inserir produto:', erro.message);
  }
}

async function consultarProduto() {
  try {
    const resultado = await db.collection('produtos').doc(ID_TESTE).get();

    if (resultado.exists) {
      console.log('Produto encontrado:');
      console.log(resultado.data());
    } else {
      console.log('Produto não encontrado.');
    }
  } catch (erro) {
    console.error('Erro ao consultar produto:', erro.message);
  }
}

async function atualizarProduto() {
  try {
    await db.collection('produtos').doc(ID_TESTE).update({ preco: 5.50, quantidadeEstoque: 35 });

    console.log('Produto atualizado com sucesso!');
  } catch (erro) {
    console.error('Erro ao atualizar produto:', erro.message);
  }
}

async function excluirProduto() {
  try {
    await db.collection('produtos').doc(ID_TESTE).delete();

    console.log('Produto excluído com sucesso!');
  } catch (erro) {
    console.error('Erro ao excluir produto:', erro.message);
  }
}

const operacoes = {
  inserir: inserirProduto,
  consultar: consultarProduto,
  atualizar: atualizarProduto,
  excluir: excluirProduto
};

const operacao = operacoes[process.argv[2]];

if (!operacao) {
  console.log('Uso: node scripts/crud.js <inserir|consultar|atualizar|excluir>');
  process.exit(1);
}

operacao();
