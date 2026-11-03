const db = require('../src/firebase');

async function consultarProdutosComQueijo() {
  try {
    const resultado = await db.collection('produtos').where('ingredientes', 'array-contains', 'queijo').get();

    console.log('\n--- Produtos que levam queijo ---');
    console.log('Total:', resultado.size);

    resultado.forEach((documento) => {
      const produto = documento.data();

      console.log(produto.nome, '- Ingredientes:', produto.ingredientes.join(', '));
    });
  } catch (erro) {
    console.error('Erro ao consultar produtos com queijo:', erro.message);
  }
}

consultarProdutosComQueijo();
