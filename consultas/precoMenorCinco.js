const db = require('../src/firebase');

async function consultarProdutosBaratos() {
  try {
    const resultado = await db.collection('produtos').where('preco', '<', 5).get();

    console.log('\n--- Produtos com preço abaixo de R$ 5,00 ---');
    console.log('Total:', resultado.size);

    resultado.forEach((documento) => {
      const produto = documento.data();

      console.log(produto.nome,'- Preço: R$',produto.preco);
    });
    
  } catch (erro) {
    console.error('Erro ao consultar produtos baratos:', erro.message);
  }
}

consultarProdutosBaratos();