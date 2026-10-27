
const db = require('../src/firebase');

async function consultarProdutosPorPeso() {
  try {
    const resultado = await db.collection('produtos').where('formaVenda', '==', 'peso').get();

    console.log('Produtos vendidos por peso:', resultado.size);

    resultado.forEach((documento) => {const produto = documento.data();

      console.log(produto.nome,'- Preço por kg: R$',produto.precoPorKg);
    });
  } catch (erro) {
    console.error('Erro ao consultar produtos por peso:', erro.message);
  }
  
}

consultarProdutosPorPeso();
