const db = require('./firebase');

async function testarConexao() {
  try {
    const resultado = await db.collection('produtos').limit(1).get();

    console.log('Conexão com o Firestore funcionando!');
    console.log('Documentos encontrados:', resultado.size);

    } catch (erro) {
    console.error('Erro ao conectar:', erro.message);
    }
}

testarConexao();