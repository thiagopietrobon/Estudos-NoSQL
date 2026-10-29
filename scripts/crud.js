const db = require('../src/firebase');

async function inserirProduto() {
  try {
    const produto = {
      nome: 'Pão de alho',
      categoria: 'pao',
      formaVenda: 'unidade',
      preco: 4.50,
      quantidadeEstoque: 20,
      disponivel: true
    };

    await db.collection('produtos').doc('teste001').set(produto);

    console.log('Produto inserido com sucesso!');
  } catch (erro) {
    console.error('Erro ao inserir produto:', erro.message);
  }
}

async function consultarProduto() {
  try {
    const resultado = await db.collection('produtos').doc('teste001').get();

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
    try{
        await db.collection('produtos').doc('teste001').update({preco: 5.50, quantidadeEstoque: 35})
        console.log('Produto atualizado com sucesso!');
    }catch (erro) {
        console.log('Erro ao atualizar produto:', erro.message);
    }
}

async function excluirProduto() {
    try{
        await db.collection('produtos').doc('teste001').delete();
        console.log('Produto excluído com sucesso!');

    }catch (erro) {
        console.log('Erro ao excluir produto:', erro.message);
    }
}

// inserirProduto();
//consultarProduto();
//atualizarProduto();
//excluirProduto();
