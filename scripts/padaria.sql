-- =============================================
-- 1. CRIAR O BANCO DE DADOS
-- =============================================

CREATE DATABASE PadariaSQL;
GO

USE PadariaSQL;
GO

-- =============================================
-- 2. TABELA DE CATEGORIAS
-- =============================================

CREATE TABLE categorias (
    id INT IDENTITY(1,1) PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE
);
GO

-- =============================================
-- 3. TABELA DE PRODUTOS
-- =============================================

CREATE TABLE produtos (
    id VARCHAR(20) PRIMARY KEY,
    nome NVARCHAR(100) NOT NULL,
    categoria_id INT NOT NULL,
    forma_venda VARCHAR(20) NOT NULL,
    preco DECIMAL(10,2) NULL,
    preco_por_kg DECIMAL(10,2) NULL,
    quantidade_estoque INT NULL,
    estoque_gramas INT NULL,
    disponivel BIT NOT NULL DEFAULT 1,

    CONSTRAINT fk_produto_categoria
        FOREIGN KEY (categoria_id)
        REFERENCES categorias(id),

    CONSTRAINT chk_forma_venda
        CHECK (forma_venda IN ('unidade', 'peso')),

    CONSTRAINT chk_dados_venda
        CHECK (
            (
                forma_venda = 'unidade'
                AND preco IS NOT NULL
                AND quantidade_estoque IS NOT NULL
                AND preco >= 0
                AND quantidade_estoque >= 0
            )
            OR
            (
                forma_venda = 'peso'
                AND preco_por_kg IS NOT NULL
                AND estoque_gramas IS NOT NULL
                AND preco_por_kg >= 0
                AND estoque_gramas >= 0
            )
        )
);
GO

-- =============================================
-- 4. TABELA DE INGREDIENTES
-- =============================================

CREATE TABLE ingredientes (
    id INT IDENTITY(1,1) PRIMARY KEY,
    produto_id VARCHAR(20) NOT NULL,
    nome NVARCHAR(100) NOT NULL,

    CONSTRAINT fk_ingrediente_produto
        FOREIGN KEY (produto_id)
        REFERENCES produtos(id)
        ON DELETE CASCADE
);
GO

-- =============================================
-- 5. CADASTRAR AS CATEGORIAS
-- =============================================

INSERT INTO categorias (nome) VALUES
    ('pao'),
    ('doce'),
    ('salgado'),
    ('bebida'),
    ('biscoito'),
    ('bolo');
GO

-- =============================================
-- 6. CADASTRAR OS 30 PRODUTOS
-- Dados correspondentes ao carga.js
-- =============================================

INSERT INTO produtos (
    id, nome, categoria_id, forma_venda,
    preco, preco_por_kg,
    quantidade_estoque, estoque_gramas, disponivel
)
SELECT
    v.id,
    v.nome,
    c.id,
    v.forma_venda,
    v.preco,
    v.preco_por_kg,
    v.quantidade_estoque,
    v.estoque_gramas,
    v.disponivel
FROM (
    VALUES
    ('pao001', N'Pão francês', 'pao', 'unidade', 0.80, NULL, 150, NULL, 1),
    ('pao002', N'Pão integral', 'pao', 'unidade', 1.50, NULL, 60, NULL, 1),
    ('pao003', N'Pão de queijo', 'pao', 'peso', NULL, 32.00, NULL, 4500, 1),
    ('pao004', N'Pão de milho', 'pao', 'unidade', 2.50, NULL, 35, NULL, 1),
    ('pao005', N'Pão de forma', 'pao', 'unidade', 8.90, NULL, 20, NULL, 1),

    ('doce001', N'Sonho de creme', 'doce', 'unidade', 5.00, NULL, 18, NULL, 1),
    ('doce002', N'Brigadeiro', 'doce', 'unidade', 3.00, NULL, 40, NULL, 1),
    ('doce003', N'Bolo de cenoura', 'doce', 'unidade', 12.00, NULL, 12, NULL, 1),
    ('doce004', N'Rosquinha de coco', 'doce', 'peso', NULL, 28.00, NULL, 3200, 1),
    ('doce005', N'Biscoito amanteigado', 'doce', 'peso', NULL, 36.00, NULL, 2500, 1),

    ('salgado001', N'Coxinha de frango', 'salgado', 'unidade', 7.50, NULL, 25, NULL, 1),
    ('salgado002', N'Empada de frango', 'salgado', 'unidade', 6.00, NULL, 20, NULL, 1),
    ('salgado003', N'Esfirra de carne', 'salgado', 'unidade', 5.50, NULL, 22, NULL, 1),
    ('salgado004', N'Mini quibe', 'salgado', 'peso', NULL, 42.00, NULL, 2800, 1),
    ('salgado005', N'Enroladinho de queijo', 'salgado', 'unidade', 5.00, NULL, 16, NULL, 1),

    ('bebida001', N'Café expresso', 'bebida', 'unidade', 4.00, NULL, 100, NULL, 1),
    ('bebida002', N'Suco de laranja', 'bebida', 'unidade', 7.00, NULL, 15, NULL, 1),
    ('bebida003', N'Refrigerante lata', 'bebida', 'unidade', 6.00, NULL, 48, NULL, 1),
    ('bebida004', N'Água mineral', 'bebida', 'unidade', 3.00, NULL, 60, NULL, 1),
    ('bebida005', N'Chocolate quente', 'bebida', 'unidade', 8.00, NULL, 20, NULL, 1),

    ('biscoito001', N'Biscoito de polvilho', 'biscoito', 'peso', NULL, 30.00, NULL, 4000, 1),
    ('biscoito002', N'Sequilho', 'biscoito', 'peso', NULL, 34.00, NULL, 1800, 1),
    ('biscoito003', N'Cookie de chocolate', 'biscoito', 'unidade', 4.50, NULL, 30, NULL, 1),
    ('biscoito004', N'Broa de milho', 'biscoito', 'peso', NULL, 26.00, NULL, 3500, 1),
    ('biscoito005', N'Palito de queijo', 'biscoito', 'peso', NULL, 38.00, NULL, 2200, 1),

    ('bolo001', N'Bolo de chocolate', 'bolo', 'unidade', 45.00, NULL, 4, NULL, 1),
    ('bolo002', N'Bolo de fubá', 'bolo', 'unidade', 18.00, NULL, 8, NULL, 1),
    ('bolo003', N'Bolo de laranja', 'bolo', 'unidade', 20.00, NULL, 6, NULL, 1),
    ('bolo004', N'Fatia de bolo de limão', 'bolo', 'unidade', 6.50, NULL, 14, NULL, 1),
    ('bolo005', N'Bolo de mandioca', 'bolo', 'unidade', 22.00, NULL, 5, NULL, 1)
) AS v (
    id, nome, categoria, forma_venda,
    preco, preco_por_kg,
    quantidade_estoque, estoque_gramas, disponivel
)
JOIN categorias AS c
    ON c.nome = v.categoria;
GO

-- =============================================
-- 7. INGREDIENTES DOS PRODUTOS
-- Dados correspondentes ao campo ingredientes do carga.js
-- =============================================

INSERT INTO ingredientes (produto_id, nome) VALUES
    ('pao001', N'farinha de trigo'),
    ('pao001', N'água'),
    ('pao001', N'fermento'),
    ('pao001', N'sal'),
    ('pao002', N'farinha integral'),
    ('pao002', N'água'),
    ('pao002', N'fermento'),
    ('pao002', N'sal'),
    ('pao003', N'polvilho'),
    ('pao003', N'queijo'),
    ('pao003', N'leite'),
    ('pao003', N'ovo'),
    ('pao003', N'óleo'),
    ('pao004', N'farinha de milho'),
    ('pao004', N'farinha de trigo'),
    ('pao004', N'leite'),
    ('pao004', N'ovo'),
    ('pao004', N'açúcar'),
    ('doce001', N'farinha de trigo'),
    ('doce001', N'leite'),
    ('doce001', N'ovo'),
    ('doce001', N'açúcar'),
    ('doce001', N'creme de confeiteiro'),
    ('doce002', N'leite condensado'),
    ('doce002', N'chocolate em pó'),
    ('doce002', N'manteiga'),
    ('doce003', N'cenoura'),
    ('doce003', N'farinha de trigo'),
    ('doce003', N'ovo'),
    ('doce003', N'açúcar'),
    ('doce003', N'óleo'),
    ('salgado001', N'farinha de trigo'),
    ('salgado001', N'frango'),
    ('salgado001', N'cebola'),
    ('salgado001', N'caldo de frango'),
    ('salgado002', N'farinha de trigo'),
    ('salgado002', N'manteiga'),
    ('salgado002', N'frango'),
    ('salgado002', N'cebola'),
    ('salgado003', N'farinha de trigo'),
    ('salgado003', N'carne moída'),
    ('salgado003', N'cebola'),
    ('salgado003', N'tomate'),
    ('salgado005', N'farinha de trigo'),
    ('salgado005', N'queijo'),
    ('salgado005', N'fermento'),
    ('salgado005', N'leite'),
    ('biscoito001', N'polvilho'),
    ('biscoito001', N'óleo'),
    ('biscoito001', N'ovo'),
    ('biscoito001', N'sal'),
    ('biscoito005', N'farinha de trigo'),
    ('biscoito005', N'queijo'),
    ('biscoito005', N'manteiga'),
    ('biscoito005', N'ovo'),
    ('bolo001', N'farinha de trigo'),
    ('bolo001', N'chocolate'),
    ('bolo001', N'ovo'),
    ('bolo001', N'açúcar'),
    ('bolo001', N'leite'),
    ('bolo004', N'farinha de trigo'),
    ('bolo004', N'limão'),
    ('bolo004', N'ovo'),
    ('bolo004', N'açúcar'),
    ('bolo004', N'manteiga');
GO

-- =============================================
-- 8. CONFERIR OS DADOS CADASTRADOS
-- =============================================

SELECT COUNT(*) AS total_produtos
FROM produtos;

SELECT *
FROM produtos
ORDER BY id;

SELECT
    p.id,
    p.nome AS produto,
    i.nome AS ingrediente
FROM produtos AS p
INNER JOIN ingredientes AS i
    ON p.id = i.produto_id
WHERE p.id = 'pao001';
GO