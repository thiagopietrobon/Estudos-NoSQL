
const db = require('../src/firebase');

async function consultarProdutosDisponiveis() {
  try {
    const resultado = await db.collection('produtos').where('disponivel', '==', true).get();

    console.log('\n--- Produtos disponíveis para venda ---');
    console.log('Total:', resultado.size);

    resultado.forEach((documento) => {
      const produto = documento.data();

      console.log(produto.nome,'- Forma de venda:',produto.formaVenda);
    });
  } catch (erro) {
    console.error('Erro ao consultar produtos disponíveis:', erro.message);
  }
}

consultarProdutosDisponiveis();
