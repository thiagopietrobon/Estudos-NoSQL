
const db = require('../src/firebase');

async function consultarPaes() {
  try {
    const resultado = await db.collection('produtos').where('categoria', '==', 'pao').get();

    console.log('Pães encontrados:', resultado.size);

    resultado.forEach((documento) => {console.log(documento.id, documento.data());});

    } catch (erro) {
    console.error('Erro ao consultar pães:', erro.message);
    }
}

consultarPaes();
