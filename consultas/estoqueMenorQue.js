
const db = require('../src/firebase');

async function consultarEstoqueBaixo() {
  try {
    const resultado = await db.collection('produtos').where('quantidadeEstoque', '<=', 10).get();

    console.log('\n--- Produtos com estoque baixo ---');
    console.log('Total:', resultado.size);

    resultado.forEach((documento) => {
      const produto = documento.data();

      console.log(produto.nome,'- Quantidade em estoque:',produto.quantidadeEstoque);
    });
  } catch (erro) {
    console.error('Erro ao consultar estoque:', erro.message);
  }
}

consultarEstoqueBaixo();
