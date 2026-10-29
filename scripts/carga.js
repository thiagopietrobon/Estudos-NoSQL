
const db = require('../src/firebase');

const produtos = [
  {
    id: 'pao001',
    nome: 'Pão francês',
    categoria: 'pao',
    formaVenda: 'unidade',
    preco: 0.80,
    quantidadeEstoque: 150,
    ingredientes: ['farinha de trigo', 'água', 'fermento', 'sal'],
    disponivel: true
  },
  {
    id: 'pao002',
    nome: 'Pão integral',
    categoria: 'pao',
    formaVenda: 'unidade',
    preco: 1.50,
    quantidadeEstoque: 60,
    disponivel: true
  },
  {
    id: 'pao003',
    nome: 'Pão de queijo',
    categoria: 'pao',
    formaVenda: 'peso',
    precoPorKg: 32.00,
    estoqueGramas: 4500,
    disponivel: true
  },
  {
    id: 'pao004',
    nome: 'Pão de milho',
    categoria: 'pao',
    formaVenda: 'unidade',
    preco: 2.50,
    quantidadeEstoque: 35,
    disponivel: true
  },
  {
    id: 'pao005',
    nome: 'Pão de forma',
    categoria: 'pao',
    formaVenda: 'unidade',
    preco: 8.90,
    quantidadeEstoque: 20,
    disponivel: true
  },
  {
    id: 'doce001',
    nome: 'Sonho de creme',
    categoria: 'doce',
    formaVenda: 'unidade',
    preco: 5.00,
    quantidadeEstoque: 18,
    disponivel: true
  },
  {
    id: 'doce002',
    nome: 'Brigadeiro',
    categoria: 'doce',
    formaVenda: 'unidade',
    preco: 3.00,
    quantidadeEstoque: 40,
    disponivel: true
  },
  {
    id: 'doce003',
    nome: 'Bolo de cenoura',
    categoria: 'doce',
    formaVenda: 'unidade',
    preco: 12.00,
    quantidadeEstoque: 12,
    disponivel: true
  },
  {
    id: 'doce004',
    nome: 'Rosquinha de coco',
    categoria: 'doce',
    formaVenda: 'peso',
    precoPorKg: 28.00,
    estoqueGramas: 3200,
    disponivel: true
  },
  {
    id: 'doce005',
    nome: 'Biscoito amanteigado',
    categoria: 'doce',
    formaVenda: 'peso',
    precoPorKg: 36.00,
    estoqueGramas: 2500,
    disponivel: true
  },
  {
    id: 'salgado001',
    nome: 'Coxinha de frango',
    categoria: 'salgado',
    formaVenda: 'unidade',
    preco: 7.50,
    quantidadeEstoque: 25,
    disponivel: true
  },
  {
    id: 'salgado002',
    nome: 'Empada de frango',
    categoria: 'salgado',
    formaVenda: 'unidade',
    preco: 6.00,
    quantidadeEstoque: 20,
    disponivel: true
  },
  {
    id: 'salgado003',
    nome: 'Esfirra de carne',
    categoria: 'salgado',
    formaVenda: 'unidade',
    preco: 5.50,
    quantidadeEstoque: 22,
    disponivel: true
  },
  {
    id: 'salgado004',
    nome: 'Mini quibe',
    categoria: 'salgado',
    formaVenda: 'peso',
    precoPorKg: 42.00,
    estoqueGramas: 2800,
    disponivel: true
  },
  {
    id: 'salgado005',
    nome: 'Enroladinho de queijo',
    categoria: 'salgado',
    formaVenda: 'unidade',
    preco: 5.00,
    quantidadeEstoque: 16,
    disponivel: true
  },
  {
    id: 'bebida001',
    nome: 'Café expresso',
    categoria: 'bebida',
    formaVenda: 'unidade',
    preco: 4.00,
    quantidadeEstoque: 100,
    disponivel: true
  },
  {
    id: 'bebida002',
    nome: 'Suco de laranja',
    categoria: 'bebida',
    formaVenda: 'unidade',
    preco: 7.00,
    quantidadeEstoque: 15,
    disponivel: true
  },
  {
    id: 'bebida003',
    nome: 'Refrigerante lata',
    categoria: 'bebida',
    formaVenda: 'unidade',
    preco: 6.00,
    quantidadeEstoque: 48,
    disponivel: true
  },
  {
    id: 'bebida004',
    nome: 'Água mineral',
    categoria: 'bebida',
    formaVenda: 'unidade',
    preco: 3.00,
    quantidadeEstoque: 60,
    disponivel: true
  },
  {
    id: 'bebida005',
    nome: 'Chocolate quente',
    categoria: 'bebida',
    formaVenda: 'unidade',
    preco: 8.00,
    quantidadeEstoque: 20,
    disponivel: true
  },
  {
    id: 'biscoito001',
    nome: 'Biscoito de polvilho',
    categoria: 'biscoito',
    formaVenda: 'peso',
    precoPorKg: 30.00,
    estoqueGramas: 4000,
    disponivel: true
  },
  {
    id: 'biscoito002',
    nome: 'Sequilho',
    categoria: 'biscoito',
    formaVenda: 'peso',
    precoPorKg: 34.00,
    estoqueGramas: 1800,
    disponivel: true
  },
  {
    id: 'biscoito003',
    nome: 'Cookie de chocolate',
    categoria: 'biscoito',
    formaVenda: 'unidade',
    preco: 4.50,
    quantidadeEstoque: 30,
    disponivel: true
  },
  {
    id: 'biscoito004',
    nome: 'Broa de milho',
    categoria: 'biscoito',
    formaVenda: 'peso',
    precoPorKg: 26.00,
    estoqueGramas: 3500,
    disponivel: true
  },
  {
    id: 'biscoito005',
    nome: 'Palito de queijo',
    categoria: 'biscoito',
    formaVenda: 'peso',
    precoPorKg: 38.00,
    estoqueGramas: 2200,
    disponivel: true
  },
  {
    id: 'bolo001',
    nome: 'Bolo de chocolate',
    categoria: 'bolo',
    formaVenda: 'unidade',
    preco: 45.00,
    quantidadeEstoque: 4,
    disponivel: true
  },
  {
    id: 'bolo002',
    nome: 'Bolo de fubá',
    categoria: 'bolo',
    formaVenda: 'unidade',
    preco: 18.00,
    quantidadeEstoque: 8,
    disponivel: true
  },
  {
    id: 'bolo003',
    nome: 'Bolo de laranja',
    categoria: 'bolo',
    formaVenda: 'unidade',
    preco: 20.00,
    quantidadeEstoque: 6,
    disponivel: true
  },
  {
    id: 'bolo004',
    nome: 'Fatia de bolo de limão',
    categoria: 'bolo',
    formaVenda: 'unidade',
    preco: 6.50,
    quantidadeEstoque: 14,
    disponivel: true
  },
  {
    id: 'bolo005',
    nome: 'Bolo de mandioca',
    categoria: 'bolo',
    formaVenda: 'unidade',
    preco: 22.00,
    quantidadeEstoque: 5,
    disponivel: true
  }
];

async function carregarProdutos() {
  try {
    const lote = db.batch();

    for (const produto of produtos) {
      const { id, ...dadosProduto } = produto;

      const referencia = db.collection('produtos').doc(id);

      lote.set(referencia, dadosProduto);
    }

    await lote.commit();

    console.log(`${produtos.length} produtos cadastrados com sucesso!`);
  } catch (erro) {
    console.error('Erro ao cadastrar produtos:', erro.message);
  }
}

carregarProdutos();
